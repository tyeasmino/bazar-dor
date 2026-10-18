import Link from "next/link";
import { notFound } from "next/navigation";

type Market = {
    market: string;
    division: string;
    min: number;
    max: number;
};

type Product = {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
    markets: Market[];
};

type PageProps = {
    params: Promise<{
        productSlug: string;
    }>;
};

const formatNumber = (value: number) =>
    value.toLocaleString("bn-BD", {
        maximumFractionDigits: 2,
    });

const unitBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    piece: "প্রতি পিস",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
};

export default async function ProductDetails({ params }: PageProps) {
    const { productSlug } = await params;

    let product: Product | null = null;
    let errorMessage = "";

    try {
        const res = await fetch(
            `https://openapi.programming-hero.com/api/bazardor/products/${encodeURIComponent(productSlug)}`,
            { cache: "no-store" }
        );

        if (res.status === 404) {
            notFound();
        }

        if (!res.ok) {
            throw new Error(`API request failed: ${res.status}`);
        }

        const data: unknown = await res.json();

        if (
            !data ||
            typeof data !== "object" ||
            !("id" in data) ||
            !("markets" in data) ||
            !Array.isArray(data.markets)
        ) {
            throw new Error("Invalid product response");
        }

        product = data as Product;
    } catch (error) {
        // Next.js notFound() error-কে swallow করবে না
        if (
            error &&
            typeof error === "object" &&
            "digest" in error &&
            error.digest === "NEXT_HTTP_ERROR_FALLBACK;404"
        ) {
            throw error;
        }

        console.error("Product details fetch error:", error);

        errorMessage =
            error instanceof Error
                ? error.message
                : "পণ্যের তথ্য লোড করা যায়নি।";
    }

    if (!productSlug || !product) {
        notFound()
    }

    const markets = product.markets.map((market) => ({
        ...market,
        average: (market.min + market.max) / 2,
    }));

    const lowestMarket = markets.reduce<{
        market: string;
        price: number;
    } | null>(
        (lowest, market) =>
            !lowest || market.min < lowest.price
                ? { market: market.market, price: market.min }
                : lowest,
        null
    );

    const highestMarket = markets.reduce<{
        market: string;
        price: number;
    } | null>(
        (highest, market) =>
            !highest || market.max > highest.price
                ? { market: market.market, price: market.max }
                : highest,
        null
    );

    const averagePrice =
        markets.length > 0
            ? markets.reduce((sum, market) => sum + market.average, 0) /
            markets.length
            : 0;

    const sortedMarkets = [...markets].sort(
        (a, b) => a.average - b.average
    );

    const isUp = product.change.dir === "up";
    const isDown = product.change.dir === "down";
    const isFlat = product.change.dir === "flat" || product.change.pct === 0;

    const changeColor = isFlat
        ? "text-gray-500"
        : isUp
            ? "text-red-600"
            : "text-green-700";

    const changeArrow = isFlat ? "―" : isUp ? "▲" : "▼";

    const difference = product.today - product.yesterday;
    const differenceText =
        difference === 0
            ? "গতকালের তুলনায় দাম অপরিবর্তিত"
            : `গতকালের তুলনায় দাম ${difference > 0 ? "বেড়েছে" : "কমেছে"
            } ${formatNumber(Math.abs(difference))} টাকা`;

    return (
        <main className="min-h-screen bg-[#F0F5F0] text-[#202923]">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500"
                >
                    <Link href="/" className="hover:text-green-700">
                        হোম
                    </Link>

                    <span>›</span>

                    <Link
                        href={`/category/${product.category}`}
                        className="hover:text-green-700"
                    >
                        {product.categoryNameBn}
                    </Link>

                    <span>›</span>

                    <span className="text-gray-700">
                        {product.nameBn}
                    </span>
                </nav>

                {/* Product Header */}
                <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#E1E9E1] bg-[#FBFDFB] p-4 sm:flex-row sm:items-center sm:p-5">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-3xl sm:h-16 sm:w-16">
                            {product.image || product.categoryIcon || "🛒"}
                        </div>

                        <div className="min-w-0">
                            <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-xs text-gray-500">
                                {unitBangla[product.unit] ||
                                    `প্রতি ${product.unit}`}
                            </p>

                            <p className="mt-2 text-xs text-gray-600">
                                {differenceText}
                            </p>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-5 rounded-xl bg-[#F0F5F0] px-4 py-3 sm:min-w-28 sm:flex-col sm:gap-0 sm:text-center">
                        <div>
                            <p className="text-xs text-gray-500">
                                আজকের দাম
                            </p>

                            <p className="text-2xl font-extrabold">
                                {formatNumber(product.today)}
                            </p>

                            <p className="text-xs text-gray-500">
                                টাকা / {product.unit === "kg" ? "কেজি" : product.unit}
                            </p>
                        </div>

                        <p className={`text-xs font-bold ${changeColor}`}>
                            {changeArrow}{" "}
                            {formatNumber(Math.abs(product.change.pct))}%
                        </p>
                    </div>
                </section>

                {/* Market Price Summary */}
                <section className="mt-4 rounded-2xl border border-[#E1E9E1] bg-[#FBFDFB] p-4 sm:p-5">
                    <h2 className="mb-3 text-sm font-bold">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-[#E1E9E1] p-4">
                            <p className="text-xs text-gray-600">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="mt-1 text-lg font-extrabold text-green-700">
                                {formatNumber(lowestMarket?.price ?? 0)} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {lowestMarket?.market ?? "তথ্য নেই"}
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E1E9E1] p-4">
                            <p className="text-xs text-gray-600">
                                সর্বোচ্চ দাম
                            </p>

                            <p className="mt-1 text-lg font-extrabold text-red-600">
                                {formatNumber(highestMarket?.price ?? 0)} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {highestMarket?.market ?? "তথ্য নেই"}
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E1E9E1] p-4">
                            <p className="text-xs text-gray-600">
                                গড় দাম
                            </p>

                            <p className="mt-1 text-lg font-extrabold text-green-700">
                                {formatNumber(averagePrice)} টাকা
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {product.unit === "kg" ? "কেজি" : product.unit} হিসেবে
                            </p>
                        </div>
                    </div>

                    {/* Market-wise Price Table */}
                    <div className="mt-5">
                        <h2 className="mb-3 text-sm font-bold">
                            বাজারভিত্তিক আজকের দাম
                        </h2>

                        <div className="overflow-x-auto rounded-xl border border-[#E1E9E1]">
                            <table className="w-full min-w-150 border-collapse text-left text-xs">
                                <thead className="bg-[#FBFDFB] text-gray-500">
                                    <tr>
                                        <th className="px-3 py-3 font-semibold">
                                            বাজার
                                        </th>
                                        <th className="px-3 py-3 font-semibold">
                                            বিভাগ
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            সর্বনিম্ন
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            সর্বোচ্চ
                                        </th>
                                        <th className="px-3 py-3 text-right font-semibold">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {sortedMarkets.map((market, index) => (
                                        <tr
                                            key={`${market.market}-${market.division}`}
                                            className={`border-t border-[#DCE5DC] ${index % 2 === 0
                                                ? "bg-[#F0F5F0]"
                                                : "bg-[#FBFDFB]"
                                                }`}
                                        >
                                            <td className="whitespace-nowrap px-3 py-3 font-medium">
                                                {market.market}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-gray-600">
                                                {market.division}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right">
                                                {formatNumber(market.min)} টাকা
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right">
                                                {formatNumber(market.max)} টাকা
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-right font-semibold">
                                                {formatNumber(market.average)} টাকা
                                            </td>
                                        </tr>
                                    ))}

                                    {sortedMarkets.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="px-3 py-8 text-center text-gray-500"
                                            >
                                                কোনো বাজারের তথ্য পাওয়া যায়নি।
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}