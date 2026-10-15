"use client";


import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
    id: number;
    nameBn: string;
    today: number;
    unit: string;
    image?: string;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
};

type CategoryProductGridProps = {
    products: Product[];
};

type SortOption = "default" | "low" | "high" | "name";

export default function CategoryProductGrid({
    products,
}: CategoryProductGridProps) {
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const sortedProducts = useMemo(() => {
        const result = [...products];

        switch (sortBy) {
            case "low":
                result.sort((a, b) => a.today - b.today);
                break;

            case "high":
                result.sort((a, b) => b.today - a.today);
                break;

            case "name":
                result.sort((a, b) =>
                    a.nameBn.localeCompare(b.nameBn, "bn")
                );
                break;

            default:
                break;
        }

        return result;
    }, [products, sortBy]);

    return (
        <>
            {/* Sort Bar */}
            <div className="flex items-center justify-end gap-3 rounded-xl border border-[#E1E9E1] bg-[#FBFDFB] px-4 py-3">
                <label
                    htmlFor="product-sort"
                    className="text-sm text-gray-500"
                >
                    সাজান
                </label>

                <select
                    id="product-sort"
                    value={sortBy}
                    onChange={(event) =>
                        setSortBy(event.target.value as SortOption)
                    }
                    className="max-w-55 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-green-600"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">দাম: কম থেকে বেশি</option>
                    <option value="high">দাম: বেশি থেকে কম</option>
                    <option value="name">নাম অনুযায়ী</option>
                </select>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.nameBn}
                            unit={product.unit}
                            price={product.today}
                            change={product.change}
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-4 rounded-xl border border-[#E1E9E1] bg-white p-8 text-center">
                    <p className="font-semibold text-gray-700">
                        কোনো পণ্য পাওয়া যায়নি
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        এই category-তে বর্তমানে কোনো পণ্য নেই।
                    </p>
                </div>
            )}
        </>
    );
}