import Form from 'next/form'
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
            <Form action="/3d-models" className="flex items-center gap-3 py-2" role="search">
                <label htmlFor="query" className="text-sm text-gray-700">Search 3D Model:</label>
                <input 
                    id="query"
                    type="text" 
                    name="query" 
                    placeholder="e.g. Dragon"
                    defaultValue={query}
                    className="flex-1 min-w-[200px] px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
            </Form>
            <ModelsGrid title="3D Models" models={filteredModel} />
        </>
    )
}
