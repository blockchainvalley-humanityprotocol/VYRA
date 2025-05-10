'use client';
import Hero from '../components/layout/main/Hero';
import Features from '../components/layout/main/Features';
import HowItWorks from '../components/layout/main/HowItWorks';
import CTA from '../components/layout/main/CTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <HowItWorks />
            <CTA />
        </main>
    );
}
