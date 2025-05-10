'use client';
import React from 'react';
import styled from 'styled-components';
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

const VideoBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(
    //     to bottom,
    //     rgba(255, 255, 255, 0.7),
    //     rgba(255, 255, 255, 0.85)
    // );
 
`;

const Hero = () => {
    return (
        <HeroSection>
            <VideoBackground>
                <Video
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/herovrya.mp4" type="video/mp4" />
                </Video>
                <Overlay />
            </VideoBackground>
            <HeroContent>
                <HeroTitle>
                    Every Round, One Pulse Wins Everything
                </HeroTitle>
                <HeroSubtitle>
                    A new DeFi experience combining biometric authentication with blockchain.<br/>
                    Stake your tokens and receive random APY rewards.
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
