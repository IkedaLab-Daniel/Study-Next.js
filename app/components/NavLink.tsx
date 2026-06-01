import Link from "next/link";
import { NavLinkProps } from "../types";

export default function NavLink({ href, children, isActive} : NavLinkProps) {

    return(
        <li className="text-sm uppercase">
            <Link
                href={href}
                className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent 
                    ${isActive ? "text-orange-accent" : ""}
                `}
            >
                {children}
            </Link>
        </li>
    )
}