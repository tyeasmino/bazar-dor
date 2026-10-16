
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

export default function UserInfo() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignout = async () => {
        await authClient.signOut()
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative">
            {user ? (
                <>
                    {/* Profile button */}
                    <button
                        type="button"
                        onClick={() =>
                            setIsDropdownOpen(!isDropdownOpen)
                        }
                        className="flex items-center gap-3 rounded-xl px-2 py-1.5
                        transition"
                    >
                        <img
                            src={user.image || "/default-avatar.png"}
                            alt={user.name || "User"}
                            className="h-12 w-12 rounded-full object-cover"
                        />

                        <span className="max-w-36 truncate font-semibold text-gray-800">
                            {user.name}
                        </span>

                        <span className="text-xs text-gray-500">
                            {isDropdownOpen ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Profile dropdown */}
                    {isDropdownOpen && (
                        <div
                            className="absolute right-0 top-full z-50 mt-3
                            w-[min(20rem,calc(100vw-2rem))]
                            rounded-2xl border border-gray-200
                            bg-white p-5 shadow-xl"
                        >
                            {/* User name and email */}
                            <div className="border-b border-gray-100 pb-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {user.name}
                                </h3>

                                <p className="mt-1 break-all text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </div>

                            {/* My profile */}
                            <Link
                                href="/profile"
                                onClick={() => setIsDropdownOpen(false)}
                                className="mt-3 flex items-center gap-3 rounded-lg
                                px-3 py-3 text-base text-gray-800
                                hover:bg-gray-50"
                            >
                                <span>👤</span>
                                আমার প্রোফাইল
                            </Link>

                            {/* Sign out */}
                            <button
                                type="button"
                                onClick={handleSignout}
                                className="flex w-full items-center gap-3
                                rounded-lg px-3 py-3 text-left
                                text-base text-red-500 hover:bg-red-50"
                            >
                                <span>↩</span>
                                সাইন আউট
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {/* Desktop buttons */}
                    <div className="hidden shrink-0 items-center gap-5 sm:flex">
                        <Link
                            href="/signin"
                            className="font-medium text-gray-800 hover:text-[#05893E]"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-lg bg-[#05893E] px-5 py-3
                            font-medium text-white shadow-md
                            transition hover:bg-green-700"
                        >
                            সাইন আপ
                        </Link>
                    </div>

                    {/* Mobile buttons */}
                    <div className="mt-4 flex flex-col gap-3 border-t
                    border-gray-100 pt-4 sm:hidden">
                        <Link
                            href="/signin"
                            className="rounded-lg border border-gray-200
                            px-4 py-3 text-center font-medium text-gray-800
                            hover:bg-gray-50"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-lg bg-[#05893E] px-4 py-3
                            text-center font-medium text-white
                            hover:bg-green-700"
                        >
                            সাইন আপ
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
