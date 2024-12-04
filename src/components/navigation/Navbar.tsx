"use client"
import { FaList } from 'react-icons/fa6'
import Logo from '../Logo'
import ThemeController from '../ui/ThemeController'
import navigation from './NavigationData'
import NavItem from './NavItem'
import { useRef } from 'react'

/**
 * Drawer component for mobile navigation
 * Provides a side-drawer menu that can be toggled on mobile devices
 * Uses daisyUI drawer component with custom styling
 */
const Drawer = () => {
    const drawerRef = useRef<HTMLInputElement>(null);

    const closeDrawer = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    return (
        <div className="drawer">
            <input ref={drawerRef} id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
                    <FaList />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="flex flex-col items-start justify-start p-4 w-80 h-full bg-base-100">
                    <Logo />
                    {navigation.map(navItem => (
                        <NavItem
                            key={navItem.href}
                            href={navItem.href}
                            label={navItem.label}
                            icon={navItem.icon}
                            className="text-left"
                            onClick={closeDrawer}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

/**
 * Main navigation component
 * Renders a responsive navbar with:
 * - Mobile: Hamburger menu that opens a drawer
 * - Desktop: Horizontal navigation with logo and theme controller
 * - Supports both mobile (drawer) and desktop (horizontal) layouts
 * Uses daisyUI navbar component with custom styling
 */
function Navbar() {
    return (
        <header className="sticky z-10 top-0 left-0 navbar bg-base-100 bg-opacity-60 backdrop-blur-md backdrop-saturate-150 shadow-lg">
            <nav className="navbar-start lg:hidden">
                <Drawer />
            </nav>
            <div className="navbar-start hidden lg:flex">
                <Logo />
            </div>
            <nav className="navbar-center hidden md:flex">
                {
                    navigation.map(navItem => (
                        <NavItem className="mr-4" href={navItem.href} key={navItem.href} label={navItem.label} icon={navItem.icon} />
                    ))
                }
            </nav>
            <div className="navbar-end">
                <ThemeController />
            </div>
        </header>
    )
}

export default Navbar