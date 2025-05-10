'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* 로고 */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-wider"
                        >
                            <span className="text-blue-400">
                                V
                            </span>
                            <span className="text-purple-400">
                                Y
                            </span>
                            <span className="text-pink-400">
                                R
                            </span>
                            <span className="text-yellow-400">
                                A
                            </span>
                        </Link>
                        <span className="ml-2 text-xs text-gray-400">
                            Vein Yield Random Allocation
                        </span>
                    </div>

                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/dashboard"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            대시보드
                        </Link>
                        <Link
                            href="/allocation"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            할당
                        </Link>
                        <Link
                            href="/analytics"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            분석
                        </Link>
                        <Link
                            href="/docs"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            문서
                        </Link>
                    </nav>

                    {/* 로그인/회원가입 버튼 */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                        >
                            로그인
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                        >
                            회원가입
                        </Link>
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
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
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-3">
                            <Link
                                href="/dashboard"
                                className="hover:text-blue-400 transition duration-300 py-2"
                            >
                                대시보드
                            </Link>
                            <Link
                                href="/allocation"
                                className="hover:text-blue-400 transition duration-300 py-2"
                            >
                                할당
                            </Link>
                            <Link
                                href="/analytics"
                                className="hover:text-blue-400 transition duration-300 py-2"
                            >
                                분석
                            </Link>
                            <Link
                                href="/docs"
                                className="hover:text-blue-400 transition duration-300 py-2"
                            >
                                문서
                            </Link>
                        </nav>
                        <div className="flex flex-col space-y-3 mt-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-center rounded hover:bg-gray-800 transition duration-300"
                            >
                                로그인
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 text-center bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
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
