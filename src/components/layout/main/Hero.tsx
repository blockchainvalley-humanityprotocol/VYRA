'use client';
import React from 'react';
import {
    HeroSection,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    HeroGraphic,
    VeinImage,
    TokenCircle,
    CTAButton,
} from '../../ui/main/main-ui';

const Hero = () => {
    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>
                    VYRA: Vein Yield Random Allocation
                </HeroTitle>
                <HeroSubtitle>
                    A new DeFi experience combining
                    biometric authentication with
                    blockchain. Stake your tokens and
                    receive random APY rewards.
                </HeroSubtitle>

                <HeroGraphic>
                    <VeinImage />
                    <TokenCircle
                        position={
                            'top: 20px; left: calc(50% - 130px);'
                        }
                        delay={'0s'}
                        color={'#3b82f6'}
                    >
                        ETH
                    </TokenCircle>
                    <TokenCircle
                        position={
                            'top: 50px; right: calc(50% - 100px);'
                        }
                        delay={'0.3s'}
                        color={'#8b5cf6'}
                    >
                        BTC
                    </TokenCircle>
                    <TokenCircle
                        position={
                            'bottom: 50px; left: calc(50% - 80px);'
                        }
                        delay={'0.6s'}
                        color={'#ec4899'}
                    >
                        DAI
                    </TokenCircle>
                    <TokenCircle
                        position={
                            'bottom: 30px; right: calc(50% - 120px);'
                        }
                        delay={'0.9s'}
                        color={'#f59e0b'}
                    >
                        USDT
                    </TokenCircle>
                </HeroGraphic>

                <CTAButton href="/app">
                    Get Started
                </CTAButton>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
