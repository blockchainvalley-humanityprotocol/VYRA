'use client';
import React from 'react';
import {
    HowItWorksSection,
    StepsContainer,
    Step,
    StepNumber,
    StepContent,
    StepTitle,
    StepDescription,
    SectionTitle,
} from '../../ui/main/main-ui';

interface StepItemProps {
    number: number;
    title: string;
    description: string;
}

const StepItem = ({
    number,
    title,
    description,
}: StepItemProps) => {
    return (
        <Step>
            <StepNumber>{number}</StepNumber>
            <StepContent>
                <StepTitle>{title}</StepTitle>
                <StepDescription>
                    {description}
                </StepDescription>
            </StepContent>
        </Step>
    );
};

const HowItWorks = () => {
    return (
        <HowItWorksSection>
            <SectionTitle>How VYRA Works</SectionTitle>
            <StepsContainer>
                <StepItem
                    number={1}
                    title="Register Vein Authentication"
                    description="After signing up for the VYRA app, complete your identity verification through the vein scanner. Biometric data is encrypted and securely stored on the blockchain."
                />

                <StepItem
                    number={2}
                    title="Stake Your Tokens"
                    description="Stake supported cryptocurrencies in the VYRA pool. Choose your minimum staking period and amount to participate."
                />

                <StepItem
                    number={3}
                    title="Join Random Draws"
                    description="Once staking is completed, you're automatically entered into the next draw round. Fair selection is conducted based on blockchain's transparent randomness."
                />

                <StepItem
                    number={4}
                    title="Receive Rewards"
                    description="If selected, you'll receive the entire pool's APY for a specific period. If not selected, you'll automatically participate in the next round."
                />
            </StepsContainer>
        </HowItWorksSection>
    );
};

export default HowItWorks;
