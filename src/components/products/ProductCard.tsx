import Link from "next/link";

export type ProductCardProps = {
    id: string;
    image?: string;
    title: string;
    unit: string;
    price: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
};

const unitBangla: Record<string, string> = {
    piece: "প্রতি পিস",
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
};

const formatNumber = (value: number | string) =>
    Number(value).toLocaleString("bn-BD", {
        maximumFractionDigits: 2,
    });

export default function ProductCard({
    id,
    image,
    title,
    unit,
    price,
    change,
}: ProductCardProps) {
    const isFlat = change.dir === "flat" || change.pct === 0;
    const isUp = !isFlat && change.dir === "up";
    const isDown = !isFlat && change.dir === "down";

    const changeColor = isFlat
        ? "text-gray-500"
        : isUp
            ? "text-red-600"
            : isDown
                ? "text-green-700"
                : "text-gray-500";

    const arrow = isFlat ? "―" : isUp ? "▲" : isDown ? "▼" : "―";

    return (
        <Link
            href={`/products/${id}`}
            className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B7DEC5] hover:shadow-lg">
            {/* Product Info */}
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F8F2] text-2xl">
                    {image || "🛒"}
                </div>

                <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#1D2921]">
                        {title}
                    </h3>

                    <p className="text-xs text-gray-500">
                        {unitBangla[unit] || `প্রতি ${unit}`}
                    </p>
                </div>
            </div>

            {/* Price and Change */}
            <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                    <p className="text-sm text-gray-500">আজকের দাম</p>

                    <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold tracking-tight">
                            {formatNumber(price)}
                        </span>

                        <span className="text-sm font-medium text-gray-600">
                            টাকা
                        </span>
                    </div>
                </div>

                <div
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-bold ${changeColor}`}
                >
                    <span aria-hidden="true">{arrow}</span>

                    <span>
                        {formatNumber(Math.abs(change.pct))}%
                    </span>
                </div>
            </div>
        </Link>
    );
}