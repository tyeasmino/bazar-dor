
"use client";

import Link from "next/link";
import { BiCart, BiHome } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-green-100 px-6 py-12">
            {/* Background decorations */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />

            <div className="relative w-full max-w-lg text-center">
                {/* Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-200 bg-white/80 shadow-lg shadow-emerald-900/5">
                    <BiCart className="h-10 w-10 text-emerald-600" />
                </div>

                {/* Error code */}
                <p className="mb-3 text-sm font-bold tracking-wide text-emerald-600">
                    দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                </p>

                <h1 className="text-8xl font-extrabold tracking-tight text-emerald-950 sm:text-9xl">
                    ৪০৪
                </h1>

                <div className="mx-auto my-6 h-1.5 w-16 rounded-full bg-emerald-500" />

                <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
                    মনে হচ্ছে আপনি পথ হারিয়েছেন!
                </h2>

                <p className="mx-auto mb-9 max-w-md text-base leading-7 text-gray-600">
                    আপনি যে পৃষ্ঠাটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    ঠিকানা পরিবর্তন করা হয়েছে অথবা পৃষ্ঠাটির অস্তিত্ব নেই।
                    চলুন, আপনাকে সঠিক পথে ফিরিয়ে নিয়ে যাই।
                </p>

                {/* Actions */}
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                        <BiHome className="h-5 w-5" />
                        হোম পেজে ফিরে যান
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white/80 px-6 py-3.5 font-semibold text-emerald-800 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                        <BsArrowLeft className="h-5 w-5" />
                        আগের পৃষ্ঠায় ফিরে যান
                    </button>
                </div>

                <p className="mt-12 text-sm text-gray-500">
                    সবুজের মাঝে পথ হারিয়েছেন?{" "}
                    <span className="font-medium text-emerald-700">
                        চলুন, বাড়ি ফিরে যাই।
                    </span>
                </p>
            </div>
        </main>
    );
}