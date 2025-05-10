'use client';
import React from 'react';
import {
    CTASection,
    CTAContent,
    CTATitle,
    CTADescription,
    CTAButton,
    Highlight,
} from '../../ui/main/main-ui';

// CTA 섹션 컴포넌트
const CTA = () => {
    return (
        <CTASection>
            <CTAContent>
                <CTATitle>Join VYRA Today</CTATitle>
                <CTADescription>
                    Experience a new approach to DeFi with
                    opportunities for{' '}
                    <Highlight>UP TO 100X</Highlight> APY.<br/>
                    Secure with vein authentication,
                    transparent with blockchain technology.
                </CTADescription>
                <CTAButton href="/register">
                    Sign Up
                </CTAButton>
            </CTAContent>
        </CTASection>
    );
};

export default CTA;
