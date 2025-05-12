import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import PrivyProvider from '../components/providers/PrivyProvider';

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
                <PrivyProvider>
                    <StyledComponentsRegistry>
                        <Header />
                            <main className="">{children}</main>
                        <Footer />
                    </StyledComponentsRegistry>
                </PrivyProvider>
            </body>
        </html>
    );
}
