
export default function Hero() {
    const today = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl border border-[#DDE8DF] bg-white py-8 md:grid-cols-[1.4fr_0.6fr]  px-4 sm:px-6 md:py-10">
                {/* Left Content */}
                <div className="flex flex-col items-start">
                    <span className="rounded-full bg-[#E0F2E7] px-3 py-1.5 text-sm font-medium text-[#05893E]">
                        {today}
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#1D2921] sm:text-4xl lg:text-[42px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#66716A] sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <a
                        href="#products"
                        className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#05893E] px-6 py-3 text-sm font-semibold text-white shadow-[0_3px_0_#036B30] transition duration-200 hover:bg-[#047A37] hover:shadow-[0_2px_0_#036B30] active:translate-y-0.5 active:shadow-none"
                    >
                        সব পণ্য দেখুন
                        <span className="ml-2" aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>

                {/* Right Illustration */}
                <div className="flex items-center justify-center md:justify-end">
                    <div className="relative w-full max-w-70">
                        <svg
                            viewBox="0 0 280 230"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-auto w-full"
                            role="img"
                            aria-label="রঙিন তাজা শাকসবজির ঝুড়ি"
                        >
                            {/* Ground shadow */}
                            <ellipse
                                cx="140"
                                cy="207"
                                rx="112"
                                ry="14"
                                fill="#E4E8E4"
                            />

                            {/* Green vegetable */}
                            <path
                                d="M143 48 Q140 29 125 24 M143 48 Q154 27 168 24 M143 48 Q141 62 142 70"
                                fill="none"
                                stroke="#15803D"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <circle cx="144" cy="91" r="35" fill="#22C55E" />
                            <ellipse
                                cx="131"
                                cy="79"
                                rx="8"
                                ry="12"
                                fill="#86EFAC"
                                opacity=".8"
                            />

                            {/* Tomato */}
                            <path
                                d="M74 94 Q76 67 98 62"
                                fill="none"
                                stroke="#15803D"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <circle cx="81" cy="111" r="32" fill="#EF4444" />
                            <path
                                d="M80 80 L86 88 L96 84 L91 94 L99 101 L87 99 L81 108 L78 97 L68 95 L76 89 Z"
                                fill="#16A34A"
                            />
                            <ellipse
                                cx="70"
                                cy="102"
                                rx="7"
                                ry="11"
                                fill="#FCA5A5"
                                opacity=".7"
                            />

                            {/* Orange carrot */}
                            <path
                                d="M112 110 Q111 92 128 87"
                                fill="none"
                                stroke="#16A34A"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <ellipse
                                cx="113"
                                cy="126"
                                rx="21"
                                ry="17"
                                fill="#F97316"
                            />

                            {/* Purple onion */}
                            <path
                                d="M61 126 Q59 111 70 105"
                                fill="none"
                                stroke="#16A34A"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <ellipse
                                cx="61"
                                cy="132"
                                rx="20"
                                ry="16"
                                fill="#A855F7"
                            />

                            {/* Yellow pepper */}
                            <path
                                d="M184 115 Q185 101 198 99"
                                fill="none"
                                stroke="#16A34A"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <ellipse
                                cx="181"
                                cy="128"
                                rx="22"
                                ry="17"
                                fill="#F59E0B"
                            />

                            {/* Basket rim */}
                            <path
                                d="M51 149 H229 L221 169 H59 Z"
                                fill="#92400E"
                            />
                            <path
                                d="M60 169 H220 L209 199 Q206 213 194 213 H86 Q74 213 71 199 Z"
                                fill="#B45309"
                            />

                            {/* Basket vertical details */}
                            <g
                                stroke="#92400E"
                                strokeWidth="3"
                                strokeLinecap="round"
                            >
                                <path d="M78 173 L83 203" />
                                <path d="M107 171 L111 204" />
                                <path d="M140 171 V206" />
                                <path d="M173 171 L169 204" />
                                <path d="M202 173 L197 203" />
                            </g>

                            {/* Basket top highlight */}
                            <path
                                d="M51 149 H229 L226 157 H54 Z"
                                fill="#A16207"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}