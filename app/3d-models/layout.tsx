import type { ReactNode } from "react"
import CategoriesNav from "@/app/components/CategoriesNav"

export default function ModelsLayout({ children }: { children: ReactNode }) {

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoriesNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}