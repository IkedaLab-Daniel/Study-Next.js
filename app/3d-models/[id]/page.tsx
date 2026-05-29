import type { ModelDetailPageProps } from "@/app/types"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  /**
   * Challenge: 
   * Import and use the `getModelById()` function from 
   * "@/app/lib/models" and use it to get the details for
   * this specific dynamic page's 3d model.
   * 
   * Note that `getModelById()` is an async function.
   * 
   * Then display the relevant information about the model,
   * using the Figma design as a guide if you'd like.
   */

  const { id } = await params
  return <h1>The id of this model is {id}</h1>
}