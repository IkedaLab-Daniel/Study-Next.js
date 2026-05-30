import { getAllCategories } from "@/app/lib/categories"
import Link from "next/link"

export default async function CategoryPage() {

    const categories = await getAllCategories()
    console.log(categories)

    return (
        <div className="container px-4 py-10 mx-auto">
            <div className="flex items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-bold">Categories</h1>
                <p className="text-sm text-gray-500">Browse 3D models by theme</p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categories.map((category, index) => (
                    <li key={index} className="h-full">
                        <Link
                            href={`/3d-models/categories/${category.slug}`}
                            className="flex items-center justify-between h-full p-4 transition-all bg-white border border-gray-200 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                        >
                            <span className="text-lg font-semibold text-gray-800">
                                {category.displayName}
                            </span>
                            <span className="text-sm font-medium text-gray-500">View</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}