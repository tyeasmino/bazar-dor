import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Product = {
    id: number;
    slug: string;
    nameBn: string;
    today: number;
    unit: string;
    image?: string;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
};

const unitBangla: Record<string, string> = {
    piece: "পিস",
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
};

// English digit → বাংলা digit
const toBanglaNumber = (value: number | string) => {
    return value.toLocaleString("bn-BD");
};

export default async function Marquee() {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("Products load করা যায়নি");
    }

    const data: Product[] = await res.json();
    const headlines = Array.isArray(data) ? data : [];

    return (
        <MarqueeText className="border-b" direction="right" duration={35}>
            <div className="flex py-2 items-center gap-4 overflow-hidden">
                {headlines.map((h) => {
                    // 0% হলে gray, অন্যথায় dir অনুযায়ী color
                    const isFlat =
                        h.change.dir === "flat" || h.change.pct === 0;

                    const colorClass = isFlat
                        ? "text-gray-500"
                        : h.change.dir === "up"
                            ? "text-green-600"
                            : h.change.dir === "down"
                                ? "text-red-600"
                                : "text-gray-500";

                    const arrow = isFlat
                        ? "―"
                        : h.change.dir === "up"
                            ? "▲"
                            : h.change.dir === "down"
                                ? "▼"
                                : "―";

                    return (
                        <span
                            key={h.id}
                            className="inline-flex shrink-0 items-center gap-2"
                        >
                            <span>{h.image}</span>

                            <span>{h.nameBn}</span>

                            <span>
                                {toBanglaNumber(h.today)} টাকা/
                                {unitBangla[h.unit] || h.unit}
                            </span>

                            <span
                                className={`inline-flex items-center gap-1 font-medium ${colorClass}`}
                            >
                                <span>{arrow}</span>
                                <span>
                                    {toBanglaNumber(h.change.pct)}%
                                </span>
                            </span>
                        </span>
                    );
                })}
            </div>
        </MarqueeText>
    );
}