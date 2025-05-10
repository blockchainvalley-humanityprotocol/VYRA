'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#111827] text-white border-b border-[#2d3748] shadow-xl">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* 로고 */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-3xl font-bold tracking-tighter relative group"
                        >
                            <span className="text-[#60a5fa] transition-all duration-300 group-hover:text-[#3b82f6]">
                                V
                            </span>
                            <span className="text-[#c084fc] transition-all duration-300 group-hover:text-[#a855f7]">
                                Y
                            </span>
                            <span className="text-[#f472b6] transition-all duration-300 group-hover:text-[#ec4899]">
                                R
                            </span>
                            <span className="text-[#fbbf24] transition-all duration-300 group-hover:text-[#f59e0b]">
                                A
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#60a5fa] via-[#c084fc] to-[#f472b6] transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                        <span className="ml-3 text-sm text-[#9ca3af] font-medium tracking-wide">
                            Vein Yield Random Allocation
                        </span>
                    </div>

                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden md:flex space-x-10">
                        <Link
                            href="/dashboard"
                            className="text-[#e5e7eb] hover:text-white font-medium transition duration-300 relative group"
                        >
                            대시보드
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                        <Link
                            href="/allocation"
                            className="text-[#e5e7eb] hover:text-white font-medium transition duration-300 relative group"
                        >
                            할당
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                        <Link
                            href="/analytics"
                            className="text-[#e5e7eb] hover:text-white font-medium transition duration-300 relative group"
                        >
                            분석
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                        <Link
                            href="/docs"
                            className="text-[#e5e7eb] hover:text-white font-medium transition duration-300 relative group"
                        >
                            문서
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                    </nav>

                    {/* 로그인/회원가입 버튼 */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded border border-[#4b5563] hover:bg-[#1f2937] transition duration-300 text-sm font-medium"
                        >
                            로그인
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded hover:from-[#1d4ed8] hover:to-[#2563eb] transition duration-300 text-sm font-medium"
                        >
                            회원가입
                        </Link>
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="메뉴 열기/닫기"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* 모바일 메뉴 */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-[#2d3748] pt-4 animate-fade-in">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/dashboard"
                                className="hover:text-[#60a5fa] text-[#e5e7eb] transition duration-300 py-2 font-medium"
                            >
                                대시보드
                            </Link>
                            <Link
                                href="/allocation"
                                className="hover:text-[#60a5fa] text-[#e5e7eb] transition duration-300 py-2 font-medium"
                            >
                                할당
                            </Link>
                            <Link
                                href="/analytics"
                                className="hover:text-[#60a5fa] text-[#e5e7eb] transition duration-300 py-2 font-medium"
                            >
                                분석
                            </Link>
                            <Link
                                href="/docs"
                                className="hover:text-[#60a5fa] text-[#e5e7eb] transition duration-300 py-2 font-medium"
                            >
                                문서
                            </Link>
                        </nav>
                        <div className="flex flex-col space-y-3 mt-4">
                            <Link
                                href="/login"
                                className="px-4 py-3 text-center rounded border border-[#4b5563] hover:bg-[#1f2937] transition duration-300 font-medium"
                            >
                                로그인
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-3 text-center bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded hover:from-[#1d4ed8] hover:to-[#2563eb] transition duration-300 font-medium"
                            >
                                회원가입
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
