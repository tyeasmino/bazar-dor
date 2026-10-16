
"use client";

import Link from "next/link";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import NavLinks from "./NavLinks";

import type { Category } from "./NavLinks";
import UserInfo from "./UserInfo";

type NavbarProps = {
    categories: Category[];
};

export default function NavbarComponent({
    categories,
}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg">
            {/* Top row */}
            <div className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex min-h-20 items-center justify-between gap-3">
                        {/* Logo and title */}
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex min-w-0 items-center gap-3"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#05893E] sm:h-12 sm:w-12">
                                <GiShoppingCart className="text-2xl text-white sm:text-3xl" />
                            </div>

                            <div className="min-w-0">
                                <h1 className="text-lg font-bold leading-tight sm:text-2xl">
                                    বাজার দর
                                </h1>
                                <p className="mt-1 text-[10px] text-gray-600 sm:text-sm">
                                    {date}
                                </p>
                            </div>
                        </Link>

                        {/* Desktop authentication */}
                        <div className="hidden sm:block">
                            <UserInfo />
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-800 transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-[#05893E] sm:hidden"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 6l12 12M18 6L6 18"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop categories: preserve existing design */}
            <div className="hidden sm:block">
                <NavLinks categories={categories} />
            </div>

            {/* Mobile dropdown */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-gray-200 bg-white shadow-lg sm:hidden"
                >
                    <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-4">
                        <p className="mb-3 text-xs font-semibold text-gray-500">
                            ক্যাটাগরি
                        </p>

                        <NavLinks
                            categories={categories}
                            mobile
                            onNavigate={() => setIsMenuOpen(false)}
                        />

                        <UserInfo />
                    </div>
                </div>
            )}
        </nav>
    );
}