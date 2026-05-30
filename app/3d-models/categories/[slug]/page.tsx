import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoryView({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } =  await params
    const allProducts = await getAllModels()
    const categoryProducts = allProducts.filter(product => product.category === slug)
    const categoryName = await getCategoryBySlug(slug)

    return (
        <>
            {categoryProducts.length > 0 ?
                ( 
                    <ModelsGrid title={`${categoryName.displayName} category`} models={categoryProducts} />
                ) :
                (
                    <h1>No product with category {categoryName.displayName}</h1>
                )
            }
        </>
    )
}