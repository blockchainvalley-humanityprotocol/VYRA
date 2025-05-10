'use client';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #0f172a;
    color: #e2e8f0;
    padding: 4rem 2rem 2rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            rgba(96, 165, 250, 0.3),
            transparent
        );
    }
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

const LogoText = styled.span<{ color: string }>`
    color: ${props => props.color};
`;

const BrandDescription = styled.p`
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.6;
    max-width: 300px;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const SocialLink = styled.a`
    color: #94a3b8;
    transition: color 0.3s;

    &:hover {
        color: #60a5fa;
    }
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FooterTitle = styled.h3`
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.875rem;

    &:hover {
        color: #60a5fa;
    }
`;

const FooterBottom = styled.div`
    max-width: 1200px;
    margin: 3rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    text-align: center;
    color: #94a3b8;
    font-size: 0.875rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterBrand>
                    <Logo>
                        <LogoText color="#60a5fa">V</LogoText>
                        <LogoText color="#c084fc">Y</LogoText>
                        <LogoText color="#f472b6">R</LogoText>
                        <LogoText color="#fbbf24">A</LogoText>
                    </Logo>
                    <BrandDescription>
                        Vein Yield Random Allocation<br/>
                        A new DeFi experience combining biometric authentication with blockchain.
                    </BrandDescription>
                    <SocialLinks>
                        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </SocialLink>
                        <SocialLink href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            Discord
                        </SocialLink>
                        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </SocialLink>
                    </SocialLinks>
                </FooterBrand>

                <FooterSection>
                    <FooterTitle>Product</FooterTitle>
                    <FooterLink href="/dashboard">Dashboard</FooterLink>
                    <FooterLink href="/pool">Pool</FooterLink>
                    <FooterLink href="/mypage">My Page</FooterLink>
                    <FooterLink href="/docs">Documentation</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Company</FooterTitle>
                    <FooterLink href="/about">About</FooterLink>
                    <FooterLink href="/careers">Careers</FooterLink>
                    <FooterLink href="/blog">Blog</FooterLink>
                    <FooterLink href="/contact">Contact</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Legal</FooterTitle>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/terms">Terms of Service</FooterLink>
                    <FooterLink href="/cookies">Cookie Policy</FooterLink>
                    <FooterLink href="/security">Security</FooterLink>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                Copyright © {new Date().getFullYear()} VYRA. BlockchainValley DevTeam. All rights reserved.
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
