'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { poolsData } from '../../../../data/poolsData';
import styled from 'styled-components';
import Link from 'next/link';
import { DashboardContainer } from '../../../../components/ui/dashboard/DashboardUI';

const Container = styled(DashboardContainer)`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--accent);
  color: var(--accent-foreground);
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: var(--accent-hover);
  }
`;

const StakeForm = styled.div`
  background: linear-gradient(145deg, var(--card), var(--card-hover));
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--foreground);
  letter-spacing: -0.025em;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.1);
  }
`;

const TokenSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.1);
  }
`;

const StakeButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  color: var(--accent-foreground);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);
    background: linear-gradient(135deg, var(--accent-hover), var(--accent));
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ResultCard = styled.div`
  background: linear-gradient(145deg, var(--card), var(--card-hover));
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid var(--border);
`;

const ResultTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ResultLabel = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const ResultValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
`;

export default function StakePage() {
  const router = useRouter();
  const params = useParams();
  const poolId = params.poolId as string;
  const pool = poolsData.find(p => p.id === poolId);

  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState(pool?.tokens[0] || '');
  const [estimatedReward, setEstimatedReward] = useState(0);

  useEffect(() => {
    if (!pool) return;
    if (!amount || isNaN(Number(amount))) {
      setEstimatedReward(0);
      return;
    }

    const stakeAmount = Number(amount);
    const totalStaked = parseFloat(pool.totalStaked.split(' ')[0].replace(/,/g, ''));
    const percentage = (stakeAmount / totalStaked) * 100;
    const estimatedReward = (stakeAmount * pool.currentAPY) / 100;

    setEstimatedReward(estimatedReward);
  }, [amount, pool]);

  if (!pool) {
    return (
      <Container>
        <h1>Pool not found</h1>
        <Link href="/dashboard">Back to Dashboard</Link>
      </Container>
    );
  }

  const handleStake = () => {
    // TODO: Implement actual staking logic
    alert('Staking functionality will be implemented soon!');
  };

  return (
    <Container>
      <BackButton href={`/dashboard/${poolId}`}>
        ← Back to Pool Details
      </BackButton>

      <StakeForm>
        <FormTitle>Stake in {pool.name}</FormTitle>
        
        <InputGroup>
          <Label>Select Token</Label>
          <TokenSelect
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
          >
            {pool.tokens.map((token) => (
              <option key={token} value={token}>
                {token}
              </option>
            ))}
          </TokenSelect>
        </InputGroup>

        <InputGroup>
          <Label>Amount to Stake</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="0.01"
          />
        </InputGroup>

        <StakeButton
          onClick={handleStake}
          disabled={!amount || isNaN(Number(amount)) || Number(amount) <= 0}
        >
          Stake {amount} {selectedToken}
        </StakeButton>

        {amount && !isNaN(Number(amount)) && Number(amount) > 0 && (
          <ResultCard>
            <ResultTitle>Estimated Returns</ResultTitle>
            <ResultGrid>
              <ResultItem>
                <ResultLabel>Annual Interest</ResultLabel>
                <ResultValue>{estimatedReward.toFixed(4)} {selectedToken}</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>APY</ResultLabel>
                <ResultValue>{pool.currentAPY}%</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Total Staked in Pool</ResultLabel>
                <ResultValue>{pool.totalStaked}</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Your Share</ResultLabel>
                <ResultValue>
                  {((Number(amount) / parseFloat(pool.totalStaked.split(' ')[0].replace(/,/g, ''))) * 100).toFixed(2)}%
                </ResultValue>
              </ResultItem>
            </ResultGrid>
          </ResultCard>
        )}
      </StakeForm>
    </Container>
  );
} 