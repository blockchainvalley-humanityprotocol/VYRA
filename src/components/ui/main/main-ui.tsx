import { styled, keyframes } from 'styled-components';

// 애니메이션 효과
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(96, 165, 250, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.8), 0 0 30px rgba(192, 132, 252, 0.5);
  }
  100% {
    box-shadow: 0 0 5px rgba(96, 165, 250, 0.5);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// 메인 섹션 컨테이너
export const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    background: linear-gradient(
        to bottom,
        #0f172a,
        #1e293b
    );
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/vein-pattern.svg');
        background-size: cover;
        opacity: 0.05;
        z-index: 0;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    animation: ${fadeIn} 1s ease-out;
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(
        to right,
        #60a5fa,
        #c084fc,
        #f472b6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const HeroSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: #e2e8f0;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const HeroGraphic = styled.div`
    margin: 3rem 0;
    position: relative;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const VeinImage = styled.div`
    position: absolute;
    width: 350px;
    height: 250px;
    background-image: url('/vein.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: ${pulseGlow} 4s infinite ease-in-out;
`;

export const TokenCircle = styled.div<{
    position: string;
    delay: string;
    color: string;
}>`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    animation: ${float} 3s infinite ease-in-out;
    animation-delay: ${(props) => props.delay};
    ${(props) => props.position}
    color: #e2e8f0;
    font-weight: 600;
    font-size: 1rem;
`;

export const FeaturesSection = styled.section`
    padding: 6rem 2rem;
    background-color: #0a0a0a;
    color: white;
`;

export const FeatureContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(300px, 1fr)
    );
    gap: 2rem;
`;

export const FeatureCard = styled.div`
    background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
    border-radius: 8px;
    padding: 2rem;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid #333;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }
`;

export const FeatureIcon = styled.div`
    width: 70px;
    height: 70px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(145deg, #2563eb, #1d4ed8);
    box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
`;

export const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
`;

export const FeatureDescription = styled.p`
    font-size: 1rem;
    color: #cbd5e1;
    line-height: 1.7;
`;

// 작동 방식 섹션
export const HowItWorksSection = styled.section`
    padding: 6rem 2rem;
    background-color: #111827;
    color: white;
`;

export const StepsContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

export const Step = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 25px;
        top: 70px;
        bottom: -30px;
        width: 2px;
        background: linear-gradient(
            to bottom,
            #60a5fa,
            transparent
        );

        @media (max-width: 768px) {
            left: 25px;
            top: 70px;
            bottom: -30px;
        }
    }
`;

export const StepNumber = styled.div`
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(145deg, #2563eb, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5rem;
    box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
`;

export const StepContent = styled.div`
    flex: 1;
`;

export const StepTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #e2e8f0;
`;

export const StepDescription = styled.p`
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.7;
`;

// CTA 섹션
export const CTASection = styled.section`
    padding: 6rem 2rem;
    background: linear-gradient(to right, #0f172a, #1e293b);
    color: white;
    text-align: center;
`;

export const CTAContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const CTATitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const CTADescription = styled.p`
    font-size: 1.2rem;
    color: #e2e8f0;
    margin-bottom: 2.5rem;
    line-height: 1.7;
`;

export const CTAButton = styled.a`
    display: inline-block;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(to right, #2563eb, #4f46e5);
    border-radius: 9999px;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.5);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(37, 99, 235, 0.7);
    }

    &:active {
        transform: translateY(1px);
    }
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
    color: white;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);

    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 4px;
        background: linear-gradient(
            to right,
            #60a5fa,
            #c084fc
        );
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

// 추가 스타일 요소
export const Highlight = styled.span`
    color: #60a5fa;
    font-weight: 700;
`;

export const GradientText = styled.span`
    background: linear-gradient(to right, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
`;
