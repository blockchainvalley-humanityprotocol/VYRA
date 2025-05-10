'use client';
import Link from 'next/link';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

// 애니메이션 정의
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

// 헤더 스타일링
const HeaderContainer = styled.header`
    background-color: #0f172a;
    color: white;
    border-bottom: 1px solid #1e293b;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const HeaderInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// 로고 스타일링
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

// 네비게이션 스타일링
const Nav = styled.nav`
    display: none;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const NavLink = styled(Link)`
    position: relative;
    font-size: 0.875rem;
    color: #cbd5e1;
    transition: color 0.2s;

    &:hover {
        color: white;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #60a5fa;
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: 1.5rem;
`;

const LoginButton = styled(Link)`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    border: 1px solid #475569;
    color: white;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1e293b;
    }
`;

const RegisterButton = styled(Link)`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    background-color: #2563eb;
    color: white;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1d4ed8;
    }
`;

// 모바일 메뉴 스타일링
const MenuButton = styled.button`
    display: flex;
    color: white;
    padding: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
    display: ${(props) =>
        props.isOpen ? 'block' : 'none'};
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 1.25rem;
    border-top: 1px solid #334155;
    animation: ${fadeIn} 0.3s ease-out forwards;

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const MobileNavLink = styled(Link)`
    font-size: 0.875rem;
    color: #cbd5e1;
    padding: 0.5rem 0;
    transition: color 0.2s;

    &:hover {
        color: #60a5fa;
    }
`;

const MobileButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
`;

const MobileLoginButton = styled(LoginButton)`
    text-align: center;
`;

const MobileRegisterButton = styled(RegisterButton)`
    text-align: center;
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <NavLink href="/dashboard">
                        대시보드
                    </NavLink>
                    <NavLink href="/allocation">
                        할당
                    </NavLink>
                    <NavLink href="/analytics">
                        분석
                    </NavLink>
                    <NavLink href="/docs">문서</NavLink>

                    <ButtonContainer>
                        <LoginButton href="/login">
                            로그인
                        </LoginButton>
                        <RegisterButton href="/register">
                            회원가입
                        </RegisterButton>
                    </ButtonContainer>
                </Nav>

                <MenuButton
                    onClick={toggleMenu}
                    aria-label="메뉴 열기/닫기"
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

            <MobileMenu isOpen={isMenuOpen}>
                <MobileNav>
                    <MobileNavLink href="/dashboard">
                        대시보드
                    </MobileNavLink>
                    <MobileNavLink href="/allocation">
                        할당
                    </MobileNavLink>
                    <MobileNavLink href="/analytics">
                        분석
                    </MobileNavLink>
                    <MobileNavLink href="/docs">
                        문서
                    </MobileNavLink>

                    <MobileButtonContainer>
                        <MobileLoginButton href="/login">
                            로그인
                        </MobileLoginButton>
                        <MobileRegisterButton href="/register">
                            회원가입
                        </MobileRegisterButton>
                    </MobileButtonContainer>
                </MobileNav>
            </MobileMenu>
        </HeaderContainer>
    );
};

export default Header;
