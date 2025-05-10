import Header from '../components/layout/Header';
import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
    title: 'VYRA',
    description: 'Vein Yield Random Allocation',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Header />
                    <main className="">{children}</main>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
