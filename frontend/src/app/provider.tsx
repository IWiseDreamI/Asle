"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import FrozenRoute from "./frozen-route"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const pathname = usePathname()

    return (<NextThemesProvider {...props}>
        <AnimatePresence mode="sync">
            <motion.div key={pathname}>
                <FrozenRoute>
                    {children}
                </FrozenRoute>
            </motion.div>
        </AnimatePresence>
    </NextThemesProvider>)
}
