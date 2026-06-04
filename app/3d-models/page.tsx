import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }) {
    const models = await getModels()
    const {query} = await searchParams

    const filteredModel = query
        ? models.filter(obj => obj.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || obj.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        : models;

    console.log(filteredModel.length)

    return (
        <>
            <form>
                <label htmlFor="query">Search 3D Model: </label>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="e.g. Dragon"
                    defaultValue={query}
                />
            </form>
            <ModelsGrid title="3D Models" models={filteredModel} />
        </>
    )
}
