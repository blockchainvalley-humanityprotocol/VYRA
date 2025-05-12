'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import { usePrivy } from '@privy-io/react-auth';
import VeinAuthModal from '../auth/VeinAuthModal';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
    background-color: #0f172a;
    color: white;
    border-bottom: 1px solid rgba(224, 217, 213, 0.1);
    box-shadow: 0 4px 6px -1px rgba(224, 217, 213, 0.1),
        0 2px 4px -1px rgba(224, 217, 213, 0.06),
        0 0 0 1px rgba(224, 217, 213, 0.05);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    height: 64px;
`;

const HeaderInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: padding 0.3s ease;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled(Link)`
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: -0.025em;
    position: relative;
    display: flex;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(
            to right,
            #60a5fa,
            #c084fc,
            #f472b6
        );
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const LogoText = styled.span<{ color: string }>`
    color: ${(props) => props.color};
    transition: all 0.3s;
`;

const LogoSubtext = styled.span`
    margin-left: 0.75rem;
    font-size: 0.75rem;
    color: #94a3b8;
    font-weight: 500;
    letter-spacing: 0.025em;
    display: none;

    @media (min-width: 640px) {
        display: inline;
    }
`;

const Nav = styled.nav`
    display: none;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavLink = styled(Link) <{ $isActive?: boolean }>`
    position: relative;
    font-size: 1rem;
    color: ${(props) =>
        props.$isActive ? 'white' : 'rgb(139, 136, 134)'};
    transition: color 0.2s;
    font-weight: ${(props) =>
        props.$isActive ? 'bold' : 'normal'};

    &:hover {
        color: white;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: 1.5rem;
`;

const LoginButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    font-weight: bold;
    border: 1px solid #60a5fa;
    color: #60a5fa;
    transition: all 0.3s ease;
    background: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(96, 165, 250, 0.1);
        border-color: #c084fc;
        color: #c084fc;
    }
`;

const RegisterButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    background: linear-gradient(135deg, #60a5fa, #c084fc);
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            135deg,
            #c084fc,
            #f472b6
        );
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(244, 114, 182, 0.2);
    }
`;

const MenuButton = styled.button`
    display: flex;
    color: rgb(66, 65, 64);
    padding: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

const HeaderSpacer = styled.div`
    height: 64px;
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVeinAuthModalOpen, setIsVeinAuthModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'auth' | 'vc-success' | null>(null);
    const { login, logout, authenticated, user } = usePrivy();
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleVeinAuthSuccess = () => {
        setIsVeinAuthModalOpen(false);
        login();
    };

    return (
        <HeaderContainer>
            <HeaderInner>
                <LogoContainer>
                    <Logo href="/">
                        <LogoText color="#60a5fa">
                            V
                        </LogoText>
                        <LogoText color="#c084fc">
                            Y
                        </LogoText>
                        <LogoText color="#f472b6">
                            R
                        </LogoText>
                        <LogoText color="#fbbf24">
                            A
                        </LogoText>
                    </Logo>
                    <LogoSubtext>
                        Vein Yield Random Allocation
                    </LogoSubtext>
                </LogoContainer>

                <Nav>
                    <NavLink
                        href="/"
                        $isActive={pathname === '/'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href="/dashboard"
                        $isActive={pathname === '/dashboard'}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        href="/mypage"
                        $isActive={pathname === '/mypage'}
                    >
                        Mypage
                    </NavLink>
                    <NavLink
                        href="/docs"
                        $isActive={pathname === '/docs'}
                    >
                        docs
                    </NavLink>

                    <ButtonContainer>
                        {authenticated ? (
                            <>
                                <LoginButton onClick={logout}>
                                    Logout
                                </LoginButton>
                                <RegisterButton as="div" onClick={() => setModalType('auth')}>
                                    {user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}
                                </RegisterButton>
                            </>
                        ) : (
                            <>
                                <LoginButton onClick={login}>
                                    SignIn
                                </LoginButton>
                                <RegisterButton onClick={() => setModalType('auth')}>
                                    SignUp
                                </RegisterButton>
                            </>
                        )}
                    </ButtonContainer>
                </Nav>

                <MenuButton
                    onClick={toggleMenu}
                    aria-label="menu"
                >
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </MenuButton>
            </HeaderInner>
            <HeaderSpacer />
            <VeinAuthModal
                isOpen={modalType !== null}
                onClose={() => setModalType(null)}
                onSuccess={modalType === 'auth' ? handleVeinAuthSuccess : undefined}
                type={modalType ?? 'auth'}
                user={user}
            />
        </HeaderContainer>
    );
};

export default Header;
