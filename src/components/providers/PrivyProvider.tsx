'use client';

import { PrivyProvider as Privy } from '@privy-io/react-auth';

export default function PrivyProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Privy
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
            clientId={process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID!}
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