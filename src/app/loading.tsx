
import { BiCart } from "react-icons/bi";

export default function Loading() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-green-100 px-6 py-6">
            {/* Background decorations */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />

            <div className="relative w-full max-w-lg text-center">
                {/* Animated Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl border border-emerald-200 bg-white/80 shadow-lg shadow-emerald-900/5">
                    <BiCart className="h-10 w-10 text-emerald-600" />
                </div>

                {/* Loading Indicator */}
                <div className="mb-5 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />
                </div>

                {/* Loading Content */}
                <p className="mb-3 text-sm font-bold tracking-wide text-emerald-600">
                    একটু অপেক্ষা করুন
                </p>

                <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                    তথ্য লোড হচ্ছে
                </h1>

                <div className="mx-auto my-6 h-1.5 w-16 rounded-full bg-emerald-500" />

                <p className="mx-auto max-w-md text-base leading-7 text-gray-600">
                    আপনার জন্য প্রয়োজনীয় তথ্য সংগ্রহ করা হচ্ছে।
                    অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।
                </p>

                {/* Skeleton Preview */}
                <div className="mt-9 space-y-3 rounded-2xl border border-[#E1E9E1] bg-[#FBFDFB] p-5 text-left shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 shrink-0 animate-pulse rounded-xl bg-emerald-100" />

                        <div className="flex-1 space-y-2">
                            <div className="h-3 w-2/3 animate-pulse rounded-full bg-emerald-100" />
                            <div className="h-2.5 w-1/3 animate-pulse rounded-full bg-gray-100" />
                        </div>

                        <div className="h-8 w-16 animate-pulse rounded-lg bg-emerald-100" />
                    </div>

                    <div className="h-px bg-emerald-50" />

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-emerald-50 p-3">
                            <div className="mb-3 h-2 w-full animate-pulse rounded-full bg-gray-100" />
                            <div className="h-5 w-3/4 animate-pulse rounded-md bg-emerald-100" />
                        </div>

                        <div className="rounded-xl border border-emerald-50 p-3">
                            <div className="mb-3 h-2 w-full animate-pulse rounded-full bg-gray-100" />
                            <div className="h-5 w-3/4 animate-pulse rounded-md bg-emerald-100" />
                        </div>

                        <div className="rounded-xl border border-emerald-50 p-3">
                            <div className="mb-3 h-2 w-full animate-pulse rounded-full bg-gray-100" />
                            <div className="h-5 w-3/4 animate-pulse rounded-md bg-emerald-100" />
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    <span className="font-medium text-emerald-700">
                        বাজারদরের সর্বশেষ তথ্য
                    </span>
                    {" "}প্রস্তুত করা হচ্ছে...
                </p>
            </div>
        </main>
    );
}

