'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { poolsData } from '../../../data/poolsData';
import styled from 'styled-components';
import Link from 'next/link';
import { DashboardContainer } from '../../../components/ui/dashboard/DashboardUI';
import {
    BackNav,
    PoolHeaderComponent,
    PoolInfoGrid,
    StakeNowButton,
    WinnerHistory,
} from '../../../components/dashboard/PoolDetailComponents';

const Container = styled(DashboardContainer)`
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

// 메인 페이지 컴포넌트
export default function PoolDetailPage() {
    const router = useRouter();
    const params = useParams();
    const poolId = params.poolId as string;

    const pool = poolsData.find((p) => p.id === poolId);

    if (!pool) {
        return (
            <Container>
                <h1>Pool not found</h1>
                <Link href="/dashboard">
                    Back to Dashboard
                </Link>
            </Container>
        );
    }

    const handleStakeClick = () => {
        router.push(`/dashboard/${poolId}/stake`);
    };

    return (
        <Container>
            <BackNav />
            <PoolHeaderComponent pool={pool} />
            <PoolInfoGrid pool={pool} />

            {pool.status === 'active' && (
                <StakeNowButton
                    onClick={handleStakeClick}
                />
            )}

            <WinnerHistory pool={pool} />
        </Container>
    );
}
