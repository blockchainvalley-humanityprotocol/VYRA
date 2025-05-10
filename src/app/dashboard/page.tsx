'use client';
import React from 'react';
import { DashboardContainer } from '../../components/ui/dashboard/DashboardUI';
import Header from '../../components/layout/dashboard/Header';
import Statistics from '../../components/layout/dashboard/Statistics';
import PoolList from '../../components/layout/dashboard/PoolList';
import { poolsData } from '../../data/poolsData';

export default function DashboardPage() {
    return (
        <DashboardContainer>
            <Header />
            <Statistics poolsData={poolsData} />
            <PoolList poolsData={poolsData} />
        </DashboardContainer>
    );
}
