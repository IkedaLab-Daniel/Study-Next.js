import { PillProps } from "@/app/types";

export default function Pill({ children, className = "" }: PillProps) {
    return (
        <span
            className={`inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 ${className}`}
        >
            {children}
        </span>
    )
}
