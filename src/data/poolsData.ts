export interface Winner {
    address: string;
    date: string;
    reward: string;
    apy: number;
    round: number;
    staked: string; // Winner's staked amount
    percentage: number; // Percentage of total pool staked
}

export interface Pool {
    id: string;
    name: string;
    tokens: string[];
    rewardPerWinner: string;
    totalStaked: string;
    startDate: string;
    endDate: string;
    status: 'active' | 'completed' | 'pending';
    winners: Winner[];
    currentAPY: number;
    participants: number;
}

// Pool dummy data
export const poolsData: Pool[] = [
    {
        id: 'pool-001',
        name: 'ETH-USDT Random Reward Pool',
        tokens: ['ETH', 'USDT'],
        rewardPerWinner: '5.2 ETH',
        totalStaked: '320.5 ETH',
        startDate: '2024-11-15',
        endDate: '2025-02-15',
        status: 'completed',
        currentAPY: 12.4,
        participants: 156,
        winners: [
            {
                address:
                    '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
                date: '2024-11-30',
                reward: '4.8 ETH',
                apy: 68.5,
                round: 1,
                staked: '15.2 ETH',
                percentage: 4.7,
            },
            {
                address:
                    '0x2546BcD3c84621e976D8185a91A922aE77ECEc30',
                date: '2024-12-15',
                reward: '5.2 ETH',
                apy: 74.2,
                round: 2,
                staked: '21.5 ETH',
                percentage: 6.7,
            },
            {
                address:
                    '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
                date: '2024-12-30',
                reward: '5.5 ETH',
                apy: 79.3,
                round: 3,
                staked: '28.3 ETH',
                percentage: 8.8,
            },
            {
                address:
                    '0xdD870fA1b7C4700F2BD7f44238821C26f7392148',
                date: '2025-01-15',
                reward: '5.1 ETH',
                apy: 72.8,
                round: 4,
                staked: '12.8 ETH',
                percentage: 4.0,
            },
            {
                address:
                    '0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45',
                date: '2025-01-30',
                reward: '4.9 ETH',
                apy: 70.1,
                round: 5,
                staked: '18.6 ETH',
                percentage: 5.8,
            },
        ],
    },
    {
        id: 'pool-002',
        name: 'BTC-ETH Liquidity Pool',
        tokens: ['BTC', 'ETH'],
        rewardPerWinner: '0.18 BTC',
        totalStaked: '12.6 BTC',
        startDate: '2024-12-01',
        endDate: '2025-06-01',
        status: 'active',
        currentAPY: 14.8,
        participants: 89,
        winners: [
            {
                address:
                    '0x731Aa03774b5D7D68024FaFb79d4a0FdCD2e5CcF',
                date: '2024-12-15',
                reward: '0.15 BTC',
                apy: 85.2,
                round: 1,
                staked: '0.42 BTC',
                percentage: 3.3,
            },
            {
                address:
                    '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
                date: '2024-12-30',
                reward: '0.16 BTC',
                apy: 92.3,
                round: 2,
                staked: '0.56 BTC',
                percentage: 4.4,
            },
            {
                address:
                    '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
                date: '2025-01-15',
                reward: '0.18 BTC',
                apy: 101.5,
                round: 3,
                staked: '0.38 BTC',
                percentage: 3.0,
            },
            {
                address:
                    '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db',
                date: '2025-01-30',
                reward: '0.17 BTC',
                apy: 96.7,
                round: 4,
                staked: '0.65 BTC',
                percentage: 5.2,
            },
            {
                address:
                    '0x617F2E2fD72FD9D5503197092aC168c91465E7f2',
                date: '2025-02-15',
                reward: '0.19 BTC',
                apy: 105.2,
                round: 5,
                staked: '0.71 BTC',
                percentage: 5.6,
            },
            {
                address:
                    '0x85842D5d1A74482228F5D108E36F048801EB71e7',
                date: '2025-03-15',
                reward: '0.21 BTC',
                apy: 110.8,
                round: 6,
                staked: '0.83 BTC',
                percentage: 6.6,
            },
            {
                address:
                    '0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C',
                date: '2025-04-15',
                reward: '0.20 BTC',
                apy: 108.5,
                round: 7,
                staked: '0.76 BTC',
                percentage: 6.0,
            },
        ],
    },
    {
        id: 'pool-003',
        name: 'Stablecoin High-Risk Pool',
        tokens: ['DAI', 'USDC'],
        rewardPerWinner: '2,500 DAI',
        totalStaked: '150,000 DAI',
        startDate: '2025-01-10',
        endDate: '2025-07-10',
        status: 'active',
        currentAPY: 8.5,
        participants: 245,
        winners: [
            {
                address:
                    '0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C',
                date: '2025-01-25',
                reward: '2,200 DAI',
                apy: 24.8,
                round: 1,
                staked: '8,500 DAI',
                percentage: 5.7,
            },
            {
                address:
                    '0x583031D1113aD414F02576BD6afaBfb302140225',
                date: '2025-02-10',
                reward: '2,350 DAI',
                apy: 26.1,
                round: 2,
                staked: '10,200 DAI',
                percentage: 6.8,
            },
            {
                address:
                    '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb',
                date: '2025-02-25',
                reward: '2,500 DAI',
                apy: 28.5,
                round: 3,
                staked: '12,800 DAI',
                percentage: 8.5,
            },
            {
                address:
                    '0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC',
                date: '2025-03-25',
                reward: '2,600 DAI',
                apy: 29.2,
                round: 4,
                staked: '15,000 DAI',
                percentage: 10.0,
            },
            {
                address:
                    '0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB',
                date: '2025-04-25',
                reward: '2,700 DAI',
                apy: 30.5,
                round: 5,
                staked: '9,200 DAI',
                percentage: 6.1,
            },
        ],
    },
    {
        id: 'pool-004',
        name: 'Multi-Token Ultra Yield Pool',
        tokens: ['ETH', 'BTC', 'LINK', 'UNI'],
        rewardPerWinner: '3.8 ETH',
        totalStaked: '210 ETH Equivalent',
        startDate: '2025-03-01',
        endDate: '2025-09-01',
        status: 'active',
        currentAPY: 18.2,
        participants: 176,
        winners: [
            {
                address:
                    '0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC',
                date: '2025-03-15',
                reward: '3.5 ETH',
                apy: 94.3,
                round: 1,
                staked: '8.2 ETH Equivalent',
                percentage: 3.9,
            },
            {
                address:
                    '0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB',
                date: '2025-03-30',
                reward: '3.8 ETH',
                apy: 102.1,
                round: 2,
                staked: '10.5 ETH Equivalent',
                percentage: 5.0,
            },
            {
                address:
                    '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb',
                date: '2025-04-15',
                reward: '4.0 ETH',
                apy: 108.7,
                round: 3,
                staked: '12.1 ETH Equivalent',
                percentage: 5.8,
            },
            {
                address:
                    '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
                date: '2025-04-30',
                reward: '3.9 ETH',
                apy: 106.2,
                round: 4,
                staked: '9.8 ETH Equivalent',
                percentage: 4.7,
            },
        ],
    },
    {
        id: 'pool-005',
        name: 'Meme Coin Extreme Risk Pool',
        tokens: ['ETH', 'SHIB', 'DOGE', 'PEPE'],
        rewardPerWinner: '12.5 ETH',
        totalStaked: '85 ETH Equivalent',
        startDate: '2025-07-01',
        endDate: '2025-10-01',
        status: 'pending',
        currentAPY: 42.5,
        participants: 64,
        winners: [],
    },
    {
        id: 'pool-006',
        name: 'Layer 2 Scaling Pool',
        tokens: ['ETH', 'ARB', 'OP', 'MATIC'],
        rewardPerWinner: '8.2 ETH',
        totalStaked: '145 ETH Equivalent',
        startDate: '2025-06-01',
        endDate: '2025-12-01',
        status: 'pending',
        currentAPY: 32.8,
        participants: 112,
        winners: [],
    },
];
