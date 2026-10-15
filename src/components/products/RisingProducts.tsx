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

export default async function RisingProducts() {
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

    // গতকালের তুলনায় দাম বেড়েছে এমন প্রথম ৬টি পণ্য
    const risingProducts = products
        .filter((product) => product.today > product.yesterday)
        .slice(0, 6);


    return (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="flex   items-center justify-center rounded-full  text-xl text-red-600">
                            <span aria-hidden="true">▲</span>
                        </span>

                        <h2 className="text-2xl font-extrabold text-[#1D2921] sm:text-3xl">
                            আজ দাম বেড়েছে
                        </h2>
                    </div>
                </div>

                {/* Product Cards */}
                {risingProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {risingProducts.map((product) => (
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
                                previousPrice={product.yesterday}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-gray-200 py-10 text-center">
                        <p className="text-gray-500">
                            আজ দাম বেড়েছে এমন কোনো পণ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}


            </div>
        </section>
    );
}