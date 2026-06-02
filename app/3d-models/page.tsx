import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"

export default async function Page() {
    const models = await getModels()
    return <ModelsGrid title="3D Models" models={models} />
}
