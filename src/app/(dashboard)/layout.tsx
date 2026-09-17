import Link from "next/link";
import type { ReactNode } from "react";

const NAV = [
    { href: "/shipments", label: "Pengiriman" },
    { href: "/analytics", label: "Analitik" },
    { href: "/settings", label: "Pengaturan" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
            <aside className="border-r border-border bg-surface p-4">
                <p className="mb-6 text-sm font-semibold">NusaCargo Control Tower</p>
                <nav className="flex flex-col gap-1">
                    {NAV.map((item) => (
                        <Link key={item.href} href={item.href}
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"></Link>
                    ))}
                </nav>
            </aside>
            <main className="p-6">{children}</main>
        </div>
    )
}