"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/shadcn/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/shadcn/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/shadcn/sheet"
import { ThemeToggler } from "./theme-toggler"

type NavItem = {
    href: string
    label: string
}

type NavLinksProps = {
    navItems: NavItem[]
}

const navItems = [
    { href: '/#top', label: 'Logo' },
    { href: '/#getting-started', label: 'Getting Started' }
]

function MobileNavLinks({ navItems }: NavLinksProps) {
    return (
        <>
            {navItems.map((item) => (
                <li key={item.href} className="w-full">
                    <Link
                        href={item.href}
                        className="block w-full rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-background"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
            <li key="theme-toggler" className="w-full">
                <ThemeToggler
                    className="block w-full rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-background"
                />
            </li>
        </>
    )
}

function DesktopNavLinks({ navItems }: NavLinksProps) {
    return (
        <>
            {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                        <Link
                            href={item.href}
                            className="rounded px-3 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-background"
                        >
                            {item.label}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
            <li key="theme-toggler" className="rounded px-3 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-background">
                <ThemeToggler />
            </li>
        </>
    )
}

export function NavMenus() {
    return (
        <NavigationMenu className="z-10 flex fixed top-0 left-0 w-full max-w-none border-b bg-background shadow-md">
            {/* Mobile menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        className="ml-auto mr-4 rounded md:hidden"
                        variant="ghost"
                        size="icon"
                        aria-label="Open navigation menu"
                    >
                        <Menu className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Navigation Links</SheetTitle>
                    </SheetHeader>

                    <nav className="mt-4" aria-label="Mobile navigation">
                        <ul className="flex flex-col items-start gap-2">
                            <MobileNavLinks navItems={navItems} />
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>

            {/* Desktop menu */}
            <NavigationMenuList className="hidden h-auto md:flex md:gap-4">
                <DesktopNavLinks navItems={navItems} />
            </NavigationMenuList>
        </NavigationMenu>
    )
}