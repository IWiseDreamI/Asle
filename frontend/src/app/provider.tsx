"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import { Toaster } from "@/components/ui/sonner"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const pathname = usePathname()

    return (<NextThemesProvider {...props}>
        <AnimatePresence mode="wait">
            <motion.div key={pathname} >
                {children}
            </motion.div>
            <Toaster />
        </AnimatePresence>
    </NextThemesProvider>)
}
