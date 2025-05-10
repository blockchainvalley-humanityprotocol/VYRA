'use client';
import React, { useState, useEffect } from 'react';
import { Pool } from '../../../data/poolsData';
import {
    PoolCard as StyledPoolCard,
    PoolHeader,
    PoolInfo,
    PoolName,
    TokensContainer,
    TokenBadge,
    PoolStatus,
    PoolBody,
    PoolGrid,
    PoolDetail,
    DetailLabel,
    DetailValue,
    HighlightValue,
    WinnersSection,
    WinnersTitle,
    WinnersList,
    SeeAllButton,
    NoWinnersMessage,
} from './DashboardUI';
import styled from 'styled-components';

// Date information styling components
const DateInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(226, 232, 240, 0.5);
`;

const DateInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DateLabel = styled.span`
    font-size: 0.875rem;
    color: #64748b;
`;

const DateValue = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--foreground);
`;

const TimeRemaining = styled.div<{ $isExpired?: boolean }>`
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) =>
        props.$isExpired ? '#ef4444' : '#10b981'};
    margin-top: 0.25rem;
    text-align: right;
`;

// Winner styling with dark mode and light mode support
const WinnerCardItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111827;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (prefers-color-scheme: light) {
        background-color: #f1f5f9;
        border: 1px solid #e2e8f0;
    }
`;

const WinnerCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const WinnerIdentity = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const WinnerAvatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.125rem;
`;

const WinnerInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const WinnerAddress = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: white;

    @media (prefers-color-scheme: light) {
        color: #1e293b;
    }
`;

const WinnerDate = styled.div`
    font-size: 0.875rem;
    color: #64748b;
`;

const RewardAmount = styled.div`
    background: linear-gradient(90deg, #4364f7, #6fb1fc);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const WinnerCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #0f1623;

    @media (prefers-color-scheme: light) {
        background-color: #e2e8f0;
        border-top: 1px solid #cbd5e1;
    }
`;

const StakedInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StakedLabel = styled.div`
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.25rem;
`;

const StakedValue = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;

    @media (prefers-color-scheme: light) {
        color: #1e293b;
    }
`;

const PercentageTag = styled.span`
    background-color: rgba(16, 185, 129, 0.2);
    color: #10b981;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    margin-left: 0.5rem;

    @media (prefers-color-scheme: light) {
        background-color: rgba(16, 185, 129, 0.15);
    }
`;

const APYInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const APYLabel = styled.div`
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.25rem;
    text-align: right;
`;

const APYValue = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #10b981;
`;

interface PoolCardProps {
    pool: Pool;
}

const PoolCardComponent: React.FC<PoolCardProps> = ({
    pool,
}) => {
    const [showAllWinners, setShowAllWinners] =
        useState(false);
    const [displayStatus, setDisplayStatus] = useState(
        pool.status
    );

    // Status text mapping
    const statusText = {
        active: 'Active',
        completed: 'Completed',
        pending: 'Pending',
    };

    // Current date is set to 2025/05/10
    const currentDate = new Date('2025-05-10');

    // Update status based on current date
    useEffect(() => {
        const endDate = new Date(pool.endDate);
        const startDate = new Date(pool.startDate);

        if (currentDate > endDate) {
            setDisplayStatus('completed');
        } else if (
            currentDate >= startDate &&
            currentDate <= endDate
        ) {
            setDisplayStatus('active');
        } else {
            setDisplayStatus('pending');
        }
    }, [pool.endDate, pool.startDate]);

    // Format dates for better display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Simplify address format
    const formatAddress = (address: string) => {
        return `${address.substring(
            0,
            6
        )}...${address.substring(address.length - 4)}`;
    };

    // Winners list to display
    const displayedWinners = showAllWinners
        ? pool.winners
        : pool.winners.slice(0, 3);

    // Check if pool has expired
    const isExpired = currentDate > new Date(pool.endDate);
    // Check if pool has not started yet
    const isNotStarted =
        currentDate < new Date(pool.startDate);

    // Calculate days remaining
    const getDaysRemaining = () => {
        const endDate = new Date(pool.endDate);
        const diffTime = Math.max(
            0,
            endDate.getTime() - currentDate.getTime()
        );
        const diffDays = Math.ceil(
            diffTime / (1000 * 60 * 60 * 24)
        );
        return diffDays > 0
            ? `${diffDays} days left`
            : 'Expired';
    };

    // Calculate days until start
    const getDaysUntilStart = () => {
        const startDate = new Date(pool.startDate);
        const diffTime = Math.max(
            0,
            startDate.getTime() - currentDate.getTime()
        );
        const diffDays = Math.ceil(
            diffTime / (1000 * 60 * 60 * 24)
        );
        return diffDays > 0
            ? `${diffDays} days until start`
            : 'Started';
    };

    return (
        <StyledPoolCard $status={displayStatus}>
            <PoolHeader>
                <PoolInfo>
                    <PoolName>{pool.name}</PoolName>
                    <TokensContainer>
                        {pool.tokens.map((token, index) => (
                            <TokenBadge key={index}>
                                {token}
                            </TokenBadge>
                        ))}
                    </TokensContainer>
                </PoolInfo>
                <PoolStatus $status={displayStatus}>
                    {statusText[displayStatus]}
                </PoolStatus>
            </PoolHeader>
            <PoolBody>
                <PoolGrid>
                    <PoolDetail>
                        <DetailLabel>Reward</DetailLabel>
                        <HighlightValue>
                            {pool.rewardPerWinner}
                        </HighlightValue>
                    </PoolDetail>
                    <PoolDetail>
                        <DetailLabel>
                            Total Staked
                        </DetailLabel>
                        <DetailValue>
                            {pool.totalStaked}
                        </DetailValue>
                    </PoolDetail>
                    <PoolDetail>
                        <DetailLabel>APY</DetailLabel>
                        <DetailValue>
                            {pool.currentAPY}%
                        </DetailValue>
                    </PoolDetail>
                    <PoolDetail>
                        <DetailLabel>
                            Participants
                        </DetailLabel>
                        <DetailValue>
                            {pool.participants}
                        </DetailValue>
                    </PoolDetail>
                </PoolGrid>

                {/* Date information */}
                <DateInfoContainer>
                    <DateInfoRow>
                        <DateLabel>Start Date:</DateLabel>
                        <DateValue>
                            {formatDate(pool.startDate)}
                        </DateValue>
                    </DateInfoRow>
                    <DateInfoRow>
                        <DateLabel>End Date:</DateLabel>
                        <div>
                            <DateValue>
                                {formatDate(pool.endDate)}
                            </DateValue>
                            {isNotStarted ? (
                                <TimeRemaining>
                                    {getDaysUntilStart()}
                                </TimeRemaining>
                            ) : !isExpired ? (
                                <TimeRemaining>
                                    {getDaysRemaining()}
                                </TimeRemaining>
                            ) : (
                                <TimeRemaining
                                    $isExpired={true}
                                >
                                    Expired
                                </TimeRemaining>
                            )}
                        </div>
                    </DateInfoRow>
                </DateInfoContainer>

                <WinnersSection>
                    <WinnersTitle>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '6px' }}
                        >
                            <path
                                d="M8 21H16M12 21V17M6.6 17H17.4C18.8359 17 19.5544 17 20.0542 16.6956C20.4833 16.4269 20.8269 16.0047 20.9972 15.5058C21.2 14.926 21.0797 14.2345 20.8387 12.8508L20.1194 8.01588C19.9373 6.80039 19.8462 6.19266 19.5867 5.73539C19.3568 5.32982 19.0216 4.99466 18.6161 4.76477C18.1539 4.50533 17.5468 4.41439 16.3329 4.23299L16 4.19685C15.4344 4.13172 15.1516 4.09918 14.8684 4.14097C14.6215 4.17807 14.3845 4.25937 14.1699 4.38106C13.9255 4.51825 13.7224 4.72191 13.3159 5.12891L12 6.44482L10.6841 5.12891C10.2776 4.72191 10.0745 4.51825 9.83018 4.38106C9.61558 4.25937 9.37864 4.17807 9.13165 4.14097C8.84849 4.09918 8.56563 4.13172 8 4.19685L7.66711 4.23299C6.45318 4.41439 5.84622 4.50533 5.38399 4.76477C4.97838 4.99466 4.64317 5.32982 4.41326 5.73539C4.15376 6.19266 4.06271 6.80039 3.88062 8.01588L3.16129 12.8508C2.92025 14.2345 2.8 14.926 3.00279 15.5058C3.17321 16.0047 3.51674 16.4269 3.94584 16.6956C4.44557 17 5.16414 17 6.6 17Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Winners (1 per round from{' '}
                        {pool.participants} participants)
                    </WinnersTitle>

                    {pool.winners.length > 0 ? (
                        <>
                            <WinnersList>
                                {displayedWinners.map(
                                    (winner, index) => (
                                        <WinnerCardItem
                                            key={index}
                                        >
                                            <WinnerCardTop>
                                                <WinnerIdentity>
                                                    <WinnerAvatar>
                                                        {winner.address.substring(
                                                            2,
                                                            4
                                                        )}
                                                    </WinnerAvatar>
                                                    <WinnerInfo>
                                                        <WinnerAddress>
                                                            {formatAddress(
                                                                winner.address
                                                            )}
                                                        </WinnerAddress>
                                                        <WinnerDate>
                                                            {
                                                                winner.date
                                                            }{' '}
                                                            (Round{' '}
                                                            {
                                                                winner.round
                                                            }

                                                            )
                                                        </WinnerDate>
                                                    </WinnerInfo>
                                                </WinnerIdentity>
                                                <RewardAmount>
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 16L12 8"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M16 12L8 12"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    {
                                                        winner.reward
                                                    }
                                                </RewardAmount>
                                            </WinnerCardTop>
                                            <WinnerCardBottom>
                                                <StakedInfo>
                                                    <StakedLabel>
                                                        Staked
                                                        Amount
                                                    </StakedLabel>
                                                    <StakedValue>
                                                        {
                                                            winner.staked
                                                        }
                                                        <PercentageTag>
                                                            {
                                                                winner.percentage
                                                            }

                                                            %
                                                        </PercentageTag>
                                                    </StakedValue>
                                                </StakedInfo>
                                                <APYInfo>
                                                    <APYLabel>
                                                        APY
                                                        Received
                                                    </APYLabel>
                                                    <APYValue>
                                                        {
                                                            winner.apy
                                                        }
                                                        %
                                                    </APYValue>
                                                </APYInfo>
                                            </WinnerCardBottom>
                                        </WinnerCardItem>
                                    )
                                )}
                            </WinnersList>

                            {pool.winners.length > 3 && (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '1rem',
                                    }}
                                >
                                    <SeeAllButton
                                        onClick={() =>
                                            setShowAllWinners(
                                                !showAllWinners
                                            )
                                        }
                                    >
                                        {showAllWinners
                                            ? 'Show Less'
                                            : `View All (${pool.winners.length})`}
                                    </SeeAllButton>
                                </div>
                            )}
                        </>
                    ) : (
                        <NoWinnersMessage>
                            {displayStatus === 'pending'
                                ? 'Pool has not started yet. Each round will select 1 lucky winner to receive the entire APY.'
                                : displayStatus === 'active'
                                ? 'No winners selected yet in this round. The draw happens at the end of each period.'
                                : 'No winners available for this pool.'}
                        </NoWinnersMessage>
                    )}
                </WinnersSection>
            </PoolBody>
        </StyledPoolCard>
    );
};

export default PoolCardComponent;
