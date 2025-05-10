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
    opacity: 0.8;
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
`;

const Hero = () => {
    return (
        <HeroSection>
            <VideoBackground>
                <Video autoPlay muted loop playsInline>
                    <source
                        src="/herovrya.mp4"
                        type="video/mp4"
                    />
                </Video>
                <Overlay />
            </VideoBackground>
            <HeroContent>
                <HeroTitle>
                    Each Round, One Pulse Wins Everything
                </HeroTitle>
                <HeroSubtitle>
                    A new DeFi experience combining
                    biometric authentication with
                    blockchain.
                    <br />
                    Stake your TOKENS and random WINNER will receive all APY rewards.
                </HeroSubtitle>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
