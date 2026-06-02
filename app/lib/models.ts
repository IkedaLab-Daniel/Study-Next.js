import modelsData from "../data/models.json"
import type { Model, GetModelsParams } from "../types"

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  let filteredModels = [...modelsData]
  if (category) {
    filteredModels = modelsData.filter(
      (model: Model) => model.category === category
    )
  }
  return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }
  return foundModel
}