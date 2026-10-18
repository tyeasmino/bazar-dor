import ProductCard from "./ProductCard";



type Product = {
    id: number;
    slug: string;
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    image: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
};

export default async function FallingProducts() {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const data: Product[] = await res.json();
    const products = Array.isArray(data) ? data : [];

    const fallingProducts = products
        .filter((product) => product.today < product.yesterday)
        .sort(
            (a, b) =>
                Math.abs(b.change.pct) - Math.abs(a.change.pct)
        )
        .slice(0, 6);


    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-[#05893E]">
                            <span aria-hidden="true">▼</span>
                        </span>

                        <h2 className="text-2xl font-extrabold text-[#1D2921] sm:text-3xl">
                            আজ দাম কমেছে
                        </h2>
                    </div>

                </div>

                {/* Product Cards */}
                {fallingProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {fallingProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={
                                    product.image ||
                                    product.categoryIcon
                                }
                                title={product.nameBn}
                                unit={product.unit}
                                price={product.today}
                                change={product.change}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-gray-200 py-10 text-center">
                        <p className="text-gray-500">
                            আজ দাম কমেছে এমন কোনো পণ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}


            </div>
        </section>
    );
}