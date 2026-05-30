import categories from "../data/categories.json"
import { Category } from "../types"

export function getAllCategories(): Category[] {
    return categories
}

export function getCategoryBySlug(slug: string): Category {
    const category = categories.find(c => c.slug === slug)
    if (!category) {
        throw new Error(`Category with slug ${slug} not found`)
    }
    return category
}

export function getDisplayNameFromSlug(slug: string): string {
    const category = getCategoryBySlug(slug)
    return category.displayName
}
