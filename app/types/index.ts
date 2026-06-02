import type { ReactNode } from "react"

// Data Types
export type Model = {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

export type GetModelsParams = {
    category?: string
}

// Page Types
export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}