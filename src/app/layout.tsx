import Header from '../components/layout/Header';
import type { Metadata } from 'next';
import './globals.css';

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
                <Header />
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    );
}
