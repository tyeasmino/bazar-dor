
import NavbarComponent from "./Navbar";
import type { Category } from "./NavLinks";

async function getCategories(): Promise<Category[]> {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories",
        {
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("Categories load করা যায়নি");
    }

    const data: Category[] = await res.json();

    return Array.isArray(data) ? data : [];
}

export default async function NavbarWrapper() {
    const categories = await getCategories();

    return <NavbarComponent categories={categories} />;
}
