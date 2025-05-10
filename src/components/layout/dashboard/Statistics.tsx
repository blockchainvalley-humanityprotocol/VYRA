'use client';
import React from 'react';
import {
    StatsGrid,
    StatCard,
    StatTitle,
    StatValue,
    StatChange,
} from '../../ui/dashboard/DashboardUI';
import { Pool } from '../../../data/poolsData';

interface StatisticsProps {
    poolsData: Pool[];
}

const Statistics: React.FC<StatisticsProps> = ({
    poolsData,
}) => {
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
        <StatsGrid>
            <StatCard>
                <StatTitle>Total Staked Value</StatTitle>
                <StatValue>{totalStakedValue}+</StatValue>
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
                <StatValue>{activePoolsCount}</StatValue>
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
        </StatsGrid>
    );
};

export default Statistics;
