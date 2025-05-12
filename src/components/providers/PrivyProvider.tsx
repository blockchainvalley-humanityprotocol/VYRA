'use client';

import { PrivyProvider as Privy } from '@privy-io/react-auth';

export default function PrivyProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Privy
            appId="cmai3ams300ffl50mcsg9ol9t"
            clientId="client-WY6LHM8cxNnrAcMhnBJHzvd4WpYany6YRsBVamMjZqTJq"
            config={{
                loginMethods: ['email', 'wallet'],
                appearance: {
                    theme: 'dark',
                    accentColor: '#2563eb'
                },
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets'
                }
            }}
        >
            {children}
        </Privy>
    );
} 