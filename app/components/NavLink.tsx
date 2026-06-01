"use client"
import Link from "next/link";
import { NavLinkProps } from "../types";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children} : NavLinkProps) {

    return(
        <li className="text-sm uppercase">
            <Link
                href={href}
                className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent 
                    ${usePathname() === href ? "text-orange-accent" : ""}
                `}
            >
                {children}
            </Link>
        </li>
    )
}