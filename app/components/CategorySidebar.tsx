import Link from "next/link";
import { getAllCategories } from "../lib/categories";

export default async function CategorySidebar() {
    const categories = await getAllCategories()

    return (
        <aside className="w-[20vw] min-w-[200px]">
            <div className="fixed top-30 w-[15vw] min-w-[200px]">
                <div className="rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-sm backdrop-blur">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                        Categories
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li key="0">
                            <Link
                                href={`/3d-models`}
                                className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900"
                            >
                                All
                            </Link>
                        </li>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link
                                    href={`/3d-models/categories/${category.slug}`}
                                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900"
                                >
                                    <span className="truncate">
                                        {category.displayName}
                                    </span>
                                    <span className="text-xs text-neutral-400 transition group-hover:text-neutral-600">
                                        →
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}