import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function CategoryView({ params }) {

    const { slug } = await params
    const allProducts = await getAllModels()
    const categoryProducts = allProducts.filter(product => product.category === slug)
    console.log(categoryProducts)

    return (
        <>
            {categoryProducts && 
                <ModelsGrid title={`${slug} category`} models={categoryProducts} />
            }

            {!categoryProducts && <p>No products under {slug}</p>}
        </>
    )
}