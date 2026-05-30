import ModelsGrid from "@/app/components/ModelsGrid"
import { getAllModels } from "@/app/lib/models"

export default async function Page() {
    const models = await getAllModels()
    return <ModelsGrid title="3D Models" models={models} />
}
