'use client';

import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: relative;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(0%, 0%);
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #60a5fa, #c084fc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.4);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 20px rgba(96, 165, 250, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(96, 165, 250, 0);
    }
  }

  svg {
    width: 60px;
    height: 60px;
    color: white;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const Timer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #60a5fa;
  margin-bottom: 1.5rem;
`;

interface VeinAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  type?: 'auth' | 'vc-success';
  user?: any;
}

export default function VeinAuthModal({
  isOpen,
  onClose,
  onSuccess,
  type = 'auth',
  user,
}: VeinAuthModalProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentType, setCurrentType] = useState<'auth' | 'vc-success'>(type);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    residence: '',
  });

  const isAuth = currentType === 'auth';

  useEffect(() => {
    if (!isOpen || !isAuth) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isAuth]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async () => {
    if (!user?.wallet?.address) {
      alert('Connect your wallet first');
      return;
    }

    try {
      const response = await fetch('https://issuer.humanity.org/credentials/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Token': process.env.NEXT_PUBLIC_API_TOKEN!,
        },
        body: JSON.stringify({
          claims: {
            name: formData.name,
            age: Number(formData.age),
            residence: formData.residence,
          },
          subject_address: user.wallet.address,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('VC 발급 성공:', data);
        setCurrentType('vc-success'); 
        onSuccess?.();
      } else {
        console.error('VC 발급 실패:', data);
      }
    } catch (err) {
      console.error('네트워크 오류:', err);
    }
  };


  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </CloseButton>

        <IconContainer>
          {isAuth ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 13l4 4L19 7" />
            </svg>
          )}
        </IconContainer>

        <Title>{isAuth ? 'Verify your human ID' : 'VC issued successfully'}</Title>
        <Description>
          {isAuth
            ? 'Please enter your information to issue a VC.\nComplete authentication within 1 minute.'
            : 'VC successfully created. 🎉'}
        </Description>

        {isAuth ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%', borderRadius: '0.5rem' }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%', borderRadius: '0.5rem' }}
            />
            <input
              type="text"
              name="residence"
              placeholder="Residence"
              value={formData.residence}
              onChange={handleChange}
              style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%', borderRadius: '0.5rem' }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: '#60a5fa',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
            <Timer>{timeLeft}s</Timer>
          </>
        ) : null}
      </ModalContent>
    </ModalOverlay>
  );
}