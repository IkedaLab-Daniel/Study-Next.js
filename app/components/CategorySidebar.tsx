import Link from "next/link";
import { getAllCategories } from "../lib/categories";

export default async function CategorySidebar() {
    const categories = await getAllCategories()


    return(
        <div className="w-[15vw]">
            <ul className="p-6 mt-50 fixed flex flex-col gap-4">
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={category.slug}>
                            {category.displayName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}