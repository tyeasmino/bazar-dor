
import Link from "next/link";

export default function ProfilePage() {
    // আপাতত ডিজাইনের জন্য নমুনা তথ্য
    const user = {
        name: "রহিম উদ্দিন",
        email: "rohim@example.com",
    };

    return (
        <main className="min-h-screen bg-[#F5F8F6] px-4 py-12 sm:px-6">
            <div className="mx-auto w-full max-w-4xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-xl font-extrabold text-[#1D2921] sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Summary Card */}
                <section className="mb-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                        {/* Profile Image */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#E5F5EB] text-3xl font-bold text-[#05893E]">
                            {user.name.charAt(0)}
                        </div>

                        {/* User Information */}
                        <div className="min-w-0 flex-1">
                            <div className="">
                                <h2 className="wrap-break-word text-xl font-bold text-[#1D2921]">
                                    {user.name}
                                </h2>
                                <p className="break-all text-sm font-medium text-gray-500 sm:text-base">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* Sign Out Button */}
                        <button
                            type="button"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-600 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                            ↩  সাইন আউট
                        </button>
                    </div>
                </section>

                {/* Personal Information Card */}
                <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-[#1D2921]">
                            তথ্য
                        </h2>
                    </div>

                    <form className="space-y-5">
                        {/* Name Input */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={user.name}
                                placeholder="আপনার নাম লিখুন"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#05893E] focus:ring-2 focus:ring-[#05893E]/10"
                            />
                        </div>

                        {/* Update Button */}
                        <button
                            type="button"
                            className="w-full rounded-xl bg-[#05893E] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#047532] focus:outline-none focus:ring-2 focus:ring-[#05893E] focus:ring-offset-2"
                        >
                            আপডেট
                        </button>
                    </form>
                </section>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#05893E]"
                    >
                        <span aria-hidden="true">←</span>
                        হোম পেজে ফিরে যান
                    </Link>
                </div>

            </div>
        </main>
    );
}