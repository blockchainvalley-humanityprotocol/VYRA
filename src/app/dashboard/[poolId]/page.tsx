'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { poolsData } from '../../../data/poolsData';
import styled from 'styled-components';
import Link from 'next/link';
import { DashboardContainer } from '../../../components/ui/dashboard/DashboardUI';

const Container = styled(DashboardContainer)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--accent);
  color: var(--accent-foreground);
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: var(--accent-hover);
  }
`;

const PoolHeader = styled.div`
  background: linear-gradient(145deg, var(--card), var(--card-hover));
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1);
  }
`;

const PoolTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--foreground);
  letter-spacing: -0.025em;
`;

const TokenContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const TokenBadge = styled.span`
  background: var(--accent);
  color: var(--accent-foreground);
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${(props) => {
    switch (props.$status) {
      case 'active':
        return 'rgba(16, 185, 129, 0.1)';
      case 'completed':
        return 'rgba(99, 102, 241, 0.1)';
      case 'pending':
        return 'rgba(245, 158, 11, 0.1)';
      default:
        return 'rgba(203, 213, 225, 0.1)';
    }
  }};
  color: ${(props) => {
    switch (props.$status) {
      case 'active':
        return '#10b981';
      case 'completed':
        return '#6366f1';
      case 'pending':
        return '#f59e0b';
      default:
        return '#64748b';
    }
  }};
  transition: all 0.2s ease;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: currentColor;
    margin-right: 0.5rem;
    animation: ${(props) =>
      props.$status === 'active'
        ? 'pulse 2s infinite'
        : 'none'};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled.div`
  background: linear-gradient(145deg, var(--card), var(--card-hover));
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1);
  }
`;

const InfoLabel = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const InfoValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.025em;
`;

const WinnersSection = styled.div`
  margin-top: 4rem;
`;

const WinnersTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--foreground);
  letter-spacing: -0.025em;
`;

const WinnersList = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const WinnerCard = styled.div<{ $round: number }>`
  background: linear-gradient(145deg, var(--card), var(--card-hover));
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) => {
      const colors = {
        1: '#10b981',
        2: '#6366f1',
        3: '#f59e0b',
        4: '#ec4899',
        5: '#8b5cf6',
        6: '#06b6d4',
        7: '#f43f5e',
        8: '#84cc16',
        9: '#0ea5e9',
        10: '#d946ef',
      };
      return colors[props.$round as keyof typeof colors] || '#64748b';
    }};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1);
  }
`;

const WinnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const WinnerLabel = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  font-weight: 500;
`;

const WinnerValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
`;

const RoundBadge = styled.div<{ $round: number }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${(props) => {
    const colors = {
      1: 'rgba(16, 185, 129, 0.1)',
      2: 'rgba(99, 102, 241, 0.1)',
      3: 'rgba(245, 158, 11, 0.1)',
      4: 'rgba(236, 72, 153, 0.1)',
      5: 'rgba(139, 92, 246, 0.1)',
      6: 'rgba(6, 182, 212, 0.1)',
      7: 'rgba(244, 63, 94, 0.1)',
      8: 'rgba(132, 204, 22, 0.1)',
      9: 'rgba(14, 165, 233, 0.1)',
      10: 'rgba(217, 70, 239, 0.1)',
    };
    return colors[props.$round as keyof typeof colors] || 'rgba(203, 213, 225, 0.1)';
  }};
  color: ${(props) => {
    const colors = {
      1: '#10b981',
      2: '#6366f1',
      3: '#f59e0b',
      4: '#ec4899',
      5: '#8b5cf6',
      6: '#06b6d4',
      7: '#f43f5e',
      8: '#84cc16',
      9: '#0ea5e9',
      10: '#d946ef',
    };
    return colors[props.$round as keyof typeof colors] || '#64748b';
  }};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const StakeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: var(--accent-foreground);
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: var(--accent-hover);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function PoolDetailPage() {
  const router = useRouter();
  const params = useParams();
  const poolId = params.poolId as string;
  
  const pool = poolsData.find(p => p.id === poolId);

  if (!pool) {
    return (
      <Container>
        <h1>Pool not found</h1>
        <Link href="/dashboard">Back to Dashboard</Link>
      </Container>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleStakeClick = () => {
    router.push(`/dashboard/${poolId}/stake`);
  };

  return (
    <Container>
      <BackButton href="/dashboard">
        ← Back to Dashboard
      </BackButton>

      <PoolHeader>
        <PoolTitle>{pool.name}</PoolTitle>
        <TokenContainer>
          {pool.tokens.map((token, index) => (
            <TokenBadge key={index}>{token}</TokenBadge>
          ))}
        </TokenContainer>
        <StatusBadge $status={pool.status}>
          {pool.status.charAt(0).toUpperCase() + pool.status.slice(1)}
        </StatusBadge>
      </PoolHeader>

      <InfoGrid>
        <InfoCard>
          <InfoLabel>Total Staked</InfoLabel>
          <InfoValue>{pool.totalStaked}</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Current APY</InfoLabel>
          <InfoValue>{pool.currentAPY}%</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Start Date</InfoLabel>
          <InfoValue>{formatDate(pool.startDate)}</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>End Date</InfoLabel>
          <InfoValue>{formatDate(pool.endDate)}</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Participants</InfoLabel>
          <InfoValue>{pool.participants}</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Reward per Winner</InfoLabel>
          <InfoValue>{pool.rewardPerWinner}</InfoValue>
        </InfoCard>
      </InfoGrid>

      {pool.status === 'active' && (
        <StakeButton onClick={handleStakeClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Stake Now
        </StakeButton>
      )}

      <WinnersSection>
        <WinnersTitle>Winners History</WinnersTitle>
        <WinnersList>
          {pool.winners.map((winner, index) => (
            <WinnerCard key={index} $round={winner.round}>
              <RoundBadge $round={winner.round}>
                Round {winner.round}
              </RoundBadge>
              <WinnerInfo>
                <WinnerLabel>Date</WinnerLabel>
                <WinnerValue>{formatDate(winner.date)}</WinnerValue>
              </WinnerInfo>
              <WinnerInfo>
                <WinnerLabel>Winner</WinnerLabel>
                <WinnerValue>{formatAddress(winner.address)}</WinnerValue>
              </WinnerInfo>
              <WinnerInfo>
                <WinnerLabel>Reward</WinnerLabel>
                <WinnerValue>{winner.reward}</WinnerValue>
              </WinnerInfo>
              <WinnerInfo>
                <WinnerLabel>Staked</WinnerLabel>
                <WinnerValue>{winner.staked}</WinnerValue>
              </WinnerInfo>
              <WinnerInfo>
                <WinnerLabel>APY</WinnerLabel>
                <WinnerValue>{winner.apy}%</WinnerValue>
              </WinnerInfo>
            </WinnerCard>
          ))}
        </WinnersList>
      </WinnersSection>
    </Container>
  );
} 