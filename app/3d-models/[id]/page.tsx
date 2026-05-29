import type { ModelDetailPageProps } from "@/app/types"
import { getModelById } from "@/app/lib/models"
import Link from "next/link"
import { BiLeftArrow } from "react-icons/bi"
export default async function ModelDetailPage({ params }: ModelDetailPageProps) {

  const { id } = await params
  const data = await getModelById(id)

  return (
    <main style={{ padding: "24px", maxWidth: "860px", margin: "0 auto" }}>
      <Link href={`/3d-models`} className="flex items-center gap-2 mb-4 text-slate-600 hover:font-bold">
        <BiLeftArrow />
        <span>Back</span>
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
          padding: "20px",
          background: "#ffffff",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
          }}
        >
          <img
            src={data.image}
            alt={data.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div>
          <p style={{ margin: 0, color: "#6b7280" }}>
            Model #{data.id} • {data.category}
          </p>
          <h1 style={{ margin: "8px 0", fontSize: "28px", letterSpacing: "-0.01em" }}>
            {data.name}
          </h1>
          <p style={{ margin: "0 0 12px", lineHeight: 1.6 }}>{data.description}</p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              color: "#374151",
            }}
          >
            <span>Likes: {data.likes}</span>
            <span>Added: {data.dateAdded}</span>
          </div>
        </div>
      </div>
    </main>
  )
}