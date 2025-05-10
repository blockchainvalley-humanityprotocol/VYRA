'use client';
import React from 'react';
import {
    DashboardHeader,
    DashboardTitle,
    DashboardDescription,
} from '../../ui/dashboard/DashboardUI';
import styled from 'styled-components';

const CurrentDateDisplay = styled.div`
    display: inline-flex;
    align-items: center;
    background: linear-gradient(
        to right,
        rgba(37, 99, 235, 0.1),
        rgba(79, 70, 229, 0.1)
    );
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: #2563eb;
    vertical-align: middle;
    font-weight: 500;
`;

const CalendarIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '6px' }}
    >
        <rect
            x="3"
            y="6"
            width="18"
            height="15"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M3 10H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M8 3L8 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M16 3L16 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const Header: React.FC = () => {
    // Current date is set to 2025/05/10
    const currentDate = new Date('2025-05-10');
    const formattedDate = currentDate.toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        }
    );

    return (
        <DashboardHeader>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                }}
            >
                <DashboardTitle>
                    VYRA Dashboard
                </DashboardTitle>
                <CurrentDateDisplay>
                    <CalendarIcon />
                    {formattedDate}
                </CurrentDateDisplay>
            </div>
            <DashboardDescription>
                Vein Yield Random Allocation - An innovative
                DeFi system combining biometric
                authentication with random distribution
                <br />
                <span
                    style={{
                        fontSize: '0.9rem',
                        marginTop: '0.5rem',
                        display: 'block',
                        color: '#64748b',
                    }}
                >
                    All participants' principal is safely
                    guaranteed, while in each round,{' '}
                    <strong>only one lucky winner</strong>{' '}
                    receives the entire APY yield. Secure
                    vein authentication ensures fair
                    distribution.
                </span>
            </DashboardDescription>
        </DashboardHeader>
    );
};

export default Header;
