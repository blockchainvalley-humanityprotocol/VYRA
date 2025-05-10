'use client';
import Hero from '../components/layout/main/Hero';
import Features from '../components/layout/main/Features';
import HowItWorks from '../components/layout/main/HowItWorks';
import CTA from '../components/layout/main/CTA';
import VideoBackground from '../components/layout/main/VideoBackground';

export default function Home() {
    return (
        <main>
            <VideoBackground />
            <Hero />
            <Features />
            <HowItWorks />
            <CTA />
        </main>
    );
}
