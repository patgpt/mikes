"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "./NavigationData";

/**
 * NavItem component renders a navigation link with an icon.
 * @param {NavigationItem} navItem - The props for the navigation item.
 * @returns {JSX.Element} The rendered navigation link.
 */
export default function NavItem({
    href,
    label,
    icon: Icon,
    className,
    onClick
}: NavigationItem & {
    className?: string;
    onClick?: () => void;
}): JSX.Element {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            className={`mr-4 btn btn-ghost text-base-content ${className || ''} ${isActive ? 'btn-active' : ''}`}
            href={href}
            onClick={onClick}
        >
            <Icon className="mr-2" />
            <span>{label}</span>
        </Link>
    )
}
