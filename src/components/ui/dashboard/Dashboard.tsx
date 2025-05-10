'use client';
import React, { useState, useEffect } from 'react';
import { poolsData, Pool } from '../../../data/poolsData';
import PoolCard from './PoolCard';
import {
    DashboardContainer,
    DashboardHeader,
    DashboardTitle,
    DashboardDescription,
    StatsGrid,
    StatCard,
    StatTitle,
    StatValue,
    StatChange,
    PoolsContainer,
    PoolsHeader,
    PoolsTitle,
    PoolFilters,
    FilterButton,
    PoolsList,
    LoadingSpinner,
} from './DashboardStyles';

const Dashboard = () => {
    // Initialize state to maintain consistency between server and client
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<
        'all' | 'active' | 'completed' | 'pending'
    >('all');
    // Set initial value to all pools
    const [filteredPools, setFilteredPools] =
        useState<Pool[]>(poolsData);

    // Calculate filtered pool data - immediate change
    useEffect(() => {
        // Filter data immediately when filter changes
        const filtered =
            filter === 'all'
                ? poolsData
                : poolsData.filter(
                      (pool) => pool.status === filter
                  );

        setFilteredPools(filtered);
    }, [filter]);

    // Calculate statistics
    const totalStakedValue = poolsData
        .reduce((sum, pool) => {
            const value = parseFloat(
                pool.totalStaked
                    .split(' ')[0]
                    .replace(/,/g, '')
            );
            return sum + value;
        }, 0)
        .toFixed(1);

    const activePoolsCount = poolsData.filter(
        (pool) => pool.status === 'active'
    ).length;

    // Each pool selects only one winner (per draw round)
    const totalDrawsCount = poolsData.reduce(
        (sum, pool) => sum + pool.winners.length,
        0
    );

    const avgAPY = (
        poolsData.reduce(
            (sum, pool) => sum + pool.currentAPY,
            0
        ) / poolsData.length
    ).toFixed(1);

    return (
        <DashboardContainer>
            <DashboardHeader>
                <DashboardTitle>
                    VYRA Dashboard
                </DashboardTitle>
                <DashboardDescription>
                    Vein Yield Random Allocation - An
                    innovative DeFi system combining
                    biometric authentication with random
                    distribution
                    <br />
                    <span
                        style={{
                            fontSize: '0.9rem',
                            marginTop: '0.5rem',
                            display: 'block',
                            color: '#64748b',
                        }}
                    >
                        All participants' principal is
                        safely guaranteed, while in each
                        round,{' '}
                        <strong>
                            only one lucky winner
                        </strong>{' '}
                        receives the entire APY yield.
                        Secure vein authentication ensures
                        fair distribution.
                    </span>
                </DashboardDescription>
            </DashboardHeader>

            {/* Statistics Summary Section */}
            <StatsGrid>
                <StatCard>
                    <StatTitle>
                        Total Staked Value
                    </StatTitle>
                    <StatValue>
                        {totalStakedValue}+
                    </StatValue>
                    <StatChange $isPositive="true">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '4px' }}
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        8.3% from last month
                    </StatChange>
                </StatCard>

                <StatCard>
                    <StatTitle>Active Pools</StatTitle>
                    <StatValue>
                        {activePoolsCount}
                    </StatValue>
                    <StatChange $isPositive="true">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '4px' }}
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        2 new this week
                    </StatChange>
                </StatCard>

                <StatCard>
                    <StatTitle>Draw Winners</StatTitle>
                    <StatValue>{totalDrawsCount}</StatValue>
                    <StatChange $isPositive="true">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '4px' }}
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        5 new this month
                    </StatChange>
                </StatCard>

                <StatCard>
                    <StatTitle>Winner APY</StatTitle>
                    <StatValue>{avgAPY}%</StatValue>
                    <StatChange $isPositive="false">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '4px' }}
                        >
                            <path
                                d="M17 7L7 17M7 17H17M7 17V7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        2.1% from last month
                    </StatChange>
                </StatCard>
            </StatsGrid>

            {/* Pool List Section */}
            <PoolsContainer>
                <PoolsHeader>
                    <PoolsTitle>
                        Random Reward Pools
                    </PoolsTitle>
                    <PoolFilters>
                        <FilterButton
                            $active={filter === 'all'}
                            onClick={() => setFilter('all')}
                        >
                            All Pools
                        </FilterButton>
                        <FilterButton
                            $active={filter === 'active'}
                            onClick={() =>
                                setFilter('active')
                            }
                        >
                            Active
                        </FilterButton>
                        <FilterButton
                            $active={filter === 'completed'}
                            onClick={() =>
                                setFilter('completed')
                            }
                        >
                            Completed
                        </FilterButton>
                        <FilterButton
                            $active={filter === 'pending'}
                            onClick={() =>
                                setFilter('pending')
                            }
                        >
                            Pending
                        </FilterButton>
                    </PoolFilters>
                </PoolsHeader>

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <PoolsList>
                        {filteredPools.length > 0 ? (
                            filteredPools.map((pool) => (
                                <PoolCard
                                    key={pool.id}
                                    pool={pool}
                                />
                            ))
                        ) : (
                            <div
                                style={{
                                    textAlign: 'center',
                                    padding: '2rem',
                                }}
                            >
                                No pools found for the
                                selected filter.
                            </div>
                        )}
                    </PoolsList>
                )}
            </PoolsContainer>
        </DashboardContainer>
    );
};

export default Dashboard;
