
import Link from "next/link";

export type Category = {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};

type NavLinksProps = {
    categories: Category[];
    mobile?: boolean;
    onNavigate?: () => void;
};

export default function NavLinks({
    categories,
    mobile = false,
    onNavigate,
}: NavLinksProps) {
    return (
        <div className="w-full">
            <div className={mobile ? "" : "mx-auto max-w-7xl px-4 sm:px-6"}>
                <ul
                    className={
                        mobile
                            ? "flex flex-col gap-1"
                            : "flex flex-wrap items-center gap-x-6 gap-y-2 py-4 sm:gap-x-8"
                    }
                >
                    {categories.map((category) => (
                        <li key={category.id} className="shrink-0">
                            <Link
                                href={`/category/${category.slug}`}
                                onClick={onNavigate}
                                className={
                                    mobile
                                        ? "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 transition hover:bg-green-50 hover:text-[#05893E]"
                                        : "inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-gray-800 transition hover:text-[#05893E] sm:text-base"
                                }
                            >
                                <span aria-hidden="true">{category.icon}</span>
                                <span>{category.nameBn}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}