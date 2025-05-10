import styled, { keyframes, css } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

// Dashboard container
export const DashboardContainer = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1.5rem;
    animation: ${fadeIn} 0.5s ease-out;
`;

export const DashboardHeader = styled.div`
    margin: 7rem;
`;

export const DashboardTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--foreground);
    margin-bottom: 0.5rem;
`;

export const DashboardDescription = styled.p`
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 2rem;
`;

// Card styles
export const Card = styled.div`
    background: linear-gradient(145deg, #ffffff, #f5f5f5);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
            145deg,
            #1a1a1a,
            #111111
        );
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(280px, 1fr)
    );
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

export const StatCard = styled.div`
    background: linear-gradient(145deg, #f8fafc, #f1f5f9);
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
            145deg,
            #1e293b,
            #0f172a
        );
        border-color: #334155;
    }
`;

export const StatTitle = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: #64748b;
    margin-bottom: 0.5rem;
`;

export const StatValue = styled.div`
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--foreground);
`;

export const StatChange = styled.span<{
    $isPositive: string;
}>`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) =>
        props.$isPositive === 'true'
            ? '#10b981'
            : '#ef4444'};
    margin-top: 0.5rem;
`;

// Pool list styles
export const PoolsContainer = styled.div`
    margin-bottom: 3rem;
`;

export const PoolsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const PoolsTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--foreground);
`;

export const PoolFilters = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const FilterButton = styled.button<{
    $active?: boolean;
}>`
    background-color: ${(props) =>
        props.$active ? '#2563eb' : 'transparent'};
    color: ${(props) =>
        props.$active ? 'white' : '#64748b'};
    border: 1px solid
        ${(props) =>
            props.$active ? '#2563eb' : '#e2e8f0'};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${(props) =>
            props.$active ? '#1d4ed8' : '#f8fafc'};
    }

    @media (prefers-color-scheme: dark) {
        border-color: ${(props) =>
            props.$active ? '#2563eb' : '#334155'};

        &:hover {
            background-color: ${(props) =>
                props.$active ? '#1d4ed8' : '#1e293b'};
        }
    }
`;

export const PoolsList = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const LoadingSpinner = styled.div`
    width: 30px;
    height: 30px;
    border: 3px solid rgba(99, 102, 241, 0.3);
    border-radius: 50%;
    border-top-color: #6366f1;
    animation: spin 1s linear infinite;
    margin: 2rem auto;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

// Pool card styles
export const PoolCard = styled.div<{ $status: string }>`
    background: linear-gradient(145deg, #ffffff, #f8fafc);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: ${(props) => {
            switch (props.$status) {
                case 'active':
                    return '#10b981';
                case 'completed':
                    return '#6366f1';
                case 'pending':
                    return '#f59e0b';
                default:
                    return '#cbd5e1';
            }
        }};
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
            145deg,
            #1e293b,
            #0f172a
        );
        border-color: #334155;
    }
`;

export const PoolHeader = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (prefers-color-scheme: dark) {
        border-color: #334155;
    }
`;

export const PoolInfo = styled.div`
    flex: 1;
`;

export const PoolName = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--foreground);
    margin-bottom: 0.25rem;
`;

export const TokensContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const TokenBadge = styled.span`
    background: linear-gradient(to right, #2563eb, #4f46e5);
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
`;

export const PoolStatus = styled.span<{ $status: string }>`
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 0.25rem;

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

    &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${(props) => {
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
        animation: ${(props) =>
            props.$status === 'active'
                ? css`
                      ${pulse} 2s infinite
                  `
                : 'none'};
    }
`;

export const PoolBody = styled.div`
    padding: 1.5rem;
`;

export const PoolGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const PoolDetail = styled.div``;

export const DetailLabel = styled.div`
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.25rem;
`;

export const DetailValue = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: var(--foreground);
`;

export const HighlightValue = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: #2563eb;
`;

// Winners section styles
export const WinnersSection = styled.div`
    margin-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
    padding-top: 1.5rem;

    @media (prefers-color-scheme: dark) {
        border-color: #334155;
    }
`;

export const WinnersTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--foreground);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const WinnersList = styled.div`
    display: grid;
    gap: 1rem;
`;

export const WinnerCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: rgba(243, 244, 246, 0.5);
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(243, 244, 246, 0.8);
    }

    @media (prefers-color-scheme: dark) {
        background-color: rgba(17, 24, 39, 0.5);

        &:hover {
            background-color: rgba(17, 24, 39, 0.8);
        }
    }
`;

export const WinnerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const WinnerAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 0.875rem;
`;

export const WinnerDetails = styled.div``;

export const WinnerAddress = styled.div`
    font-size: 0.875rem;
    color: var(--foreground);
    font-weight: 500;
`;

export const WinnerDate = styled.div`
    font-size: 0.75rem;
    color: #64748b;
`;

export const WinnerReward = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const RewardAmount = styled.div`
    font-size: 0.875rem;
    font-weight: 600;
    color: #2563eb;
`;

export const RewardRate = styled.div`
    font-size: 0.75rem;
    font-weight: 500;
    color: #10b981;
`;

// Button styles
export const CTAButton = styled.button`
    background: linear-gradient(to right, #2563eb, #4f46e5);
    color: white;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 0.2s;

    &:hover {
        background: linear-gradient(
            to right,
            #1d4ed8,
            #4338ca
        );
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const SeeAllButton = styled.button`
    background: transparent;
    color: #2563eb;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #e2e8f0;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(37, 99, 235, 0.05);
    }

    @media (prefers-color-scheme: dark) {
        border-color: #334155;
    }
`;

export const NoWinnersMessage = styled.div`
    text-align: center;
    padding: 1.5rem;
    color: #64748b;
    font-size: 0.875rem;
`;
