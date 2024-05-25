"use client";

import { Plaster } from "next/font/google";
import Link from "next/link";
import RequestForm from "./request-form";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "./sidebar";

const plaster = Plaster({ subsets: ["latin"], style: ["normal"], weight: ["400"] });

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 h-[12vh] py-[3vh] px-[10vw] bg-neutral-900 w-[100vw] flex justify-between items-center z-10">
            <Link href="/" className={`${plaster.className} cursor-pointer select-none text-5xl duration-500`}>Asle</Link>
            <nav className="flex justify-between w-[40vw] items-center">
                <Link href="/services">Услуги</Link>
                <Link href="/projects">Портфолио</Link>
                <Link href="/contactUs">Контакты</Link>
                <RequestForm />
            </nav>
        </header>
    );
}
