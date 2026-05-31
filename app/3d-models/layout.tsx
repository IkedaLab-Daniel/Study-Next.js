import CategorySidebar from "../components/CategorySidebar";
import { RootLayoutProps } from "../types";

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="flex">
            {/* <Sidebar /> */}
            <CategorySidebar />
            {children}
        </div>
    )
}