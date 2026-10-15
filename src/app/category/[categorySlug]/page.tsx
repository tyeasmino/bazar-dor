import CategoryProductGrid from "@/components/products/CategoryProductGrid";


type ProductChange = {
    dir: "up" | "down" | "flat";
    pct: number;
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
    change: ProductChange;
};

type CategoryProductsPageProps = {
    params: Promise<{
        categorySlug: string;
    }>;
};

const formatNumber = (value: number) =>
    value.toLocaleString("bn-BD");

export default async function CategoryProducts({
    params,
}: CategoryProductsPageProps) {
    const { categorySlug } = await params;

    let products: Product[] = [];
    let hasError = false;

    try {
        const res = await fetch(
            `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categorySlug)}`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error(`API request failed: ${res.status}`);
        }

        const data: unknown = await res.json();

        if (!Array.isArray(data)) {
            throw new Error("Invalid API response: expected an array");
        }

        products = data as Product[];
    } catch (error) {
        console.error("Failed to fetch category products:", error);
        hasError = true;
    }

    const categoryName = products[0]?.categoryNameBn ?? "পণ্য";
    const categoryIcon = products[0]?.categoryIcon ?? "🛒";



    return (
        <main className="min-h-screen bg-[#F0F5F0] text-[#202923]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

                {/* Category Header */}
                <section className="flex items-center gap-4 rounded-xl border border-[#E1E9E1] bg-[#FBFDFB] p-4 sm:p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EDF1ED] text-3xl">
                        {categoryIcon}
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">
                            {categoryName}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            {formatNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </section>

                {/* Product Sorting and Grid */}
                <section className="mt-4">
                    {hasError ? (
                        <div className="rounded-xl border border-red-200 bg-white p-6 text-center">
                            <p className="font-medium text-red-600">
                                পণ্যের তথ্য লোড করা যায়নি।
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                কিছুক্ষণ পর আবার চেষ্টা করো।
                            </p>
                        </div>
                    ) : (
                        <CategoryProductGrid products={products} />
                    )}
                </section>


            </div>
        </main>
    );
}