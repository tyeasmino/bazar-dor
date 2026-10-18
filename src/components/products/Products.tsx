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

const formatNumber = (value: number | string) =>
    Number(value).toLocaleString("bn-BD", {
        maximumFractionDigits: 2,
    });

export default async function Products() {
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

    return (
        <section id="products" className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Section Heading */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-extrabold text-[#1D2921] sm:text-3xl">
                            সব পণ্য
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর
                        </p>
                    </div>

                    <span className="rounded-full bg-[#E5F5EB] px-4 py-2 text-sm font-semibold text-[#05893E]">
                        মোট {formatNumber(products.length)}টি পণ্য
                    </span>
                </div>

                {/* Products Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
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
                    <div className="rounded-2xl border border-gray-200 py-12 text-center">
                        <p className="text-gray-500">
                            বর্তমানে কোনো পণ্যের তথ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}