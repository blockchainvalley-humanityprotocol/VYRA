'use client';
import React from 'react';
import {
    FeaturesSection,
    FeatureContainer,
    FeatureCard,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
    SectionTitle,
} from '../../ui/main/main-ui';

// 특징 아이템 컴포넌트
interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Feature = ({
    icon,
    title,
    description,
}: FeatureProps) => {
    return (
        <FeatureCard>
            <FeatureIcon>{icon}</FeatureIcon>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDescription>
                {description}
            </FeatureDescription>
        </FeatureCard>
    );
};

const Features = () => {
    return (
        <FeaturesSection>
            <SectionTitle>VYRA Features</SectionTitle>
            <FeatureContainer>
                <Feature
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle
                                cx="9"
                                cy="7"
                                r="4"
                            ></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    }
                    title="Vein Authentication Security"
                    description="Highest level of security through biometric authentication using the user's vein pattern. Personal identification data is encrypted and used for transaction approval."
                />

                <Feature
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                            ></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line
                                x1="9"
                                y1="9"
                                x2="9.01"
                                y2="9"
                            ></line>
                            <line
                                x1="15"
                                y1="9"
                                x2="15.01"
                                y2="9"
                            ></line>
                        </svg>
                    }
                    title="Random APY Allocation"
                    description="All staking rewards are concentrated to one randomly selected participant for a specific period. This combines high yield opportunities with exciting gamification elements."
                />

                <Feature
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    }
                    title="Multi-Token Support"
                    description="Stake various cryptocurrencies including ETH, BTC, DAI and others. Participate with your preferred tokens to increase pool diversity and distribute risk effectively."
                />
            </FeatureContainer>
        </FeaturesSection>
    );
};

export default Features;
