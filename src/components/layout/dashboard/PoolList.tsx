'use client';
import React, { useState, useEffect } from 'react';
import {
    PoolsContainer,
    PoolsHeader,
    PoolsTitle,
    PoolFilters,
    FilterButton,
    PoolsList,
    LoadingSpinner,
} from '../../ui/dashboard/DashboardUI';
import PoolCard from '../../ui/dashboard/PoolCard';
import { Pool } from '../../../data/poolsData';

interface PoolListProps {
    poolsData: Pool[];
}

const PoolList: React.FC<PoolListProps> = ({
    poolsData,
}) => {
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<
        'all' | 'active' | 'completed' | 'pending'
    >('all');
    const [filteredPools, setFilteredPools] =
        useState<Pool[]>(poolsData);

    // Calculate filtered pool data when filter changes
    useEffect(() => {
        const filtered =
            filter === 'all'
                ? poolsData
                : poolsData.filter(
                      (pool) => pool.status === filter
                  );

        setFilteredPools(filtered);
    }, [filter, poolsData]);

    return (
        <PoolsContainer>
            <PoolsHeader>
                <PoolsTitle>Random Reward Pools</PoolsTitle>
                <PoolFilters>
                    <FilterButton
                        $active={filter === 'all'}
                        onClick={() => setFilter('all')}
                    >
                        All Pools
                    </FilterButton>
                    <FilterButton
                        $active={filter === 'active'}
                        onClick={() => setFilter('active')}
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
                        onClick={() => setFilter('pending')}
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
                            No pools found for the selected
                            filter.
                        </div>
                    )}
                </PoolsList>
            )}
        </PoolsContainer>
    );
};

export default PoolList;
