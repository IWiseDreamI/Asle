"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form, FormControl,
    FormDescription, FormField,
    FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

const signInSchema = z.object({
    username: z.string().min(2, { message: "Введите username", }),
    password: z.string().min(2, { message: "Введите пароль", }),
})

const signUpSchema = z.object({
    username: z.string().min(2, { message: "Введите username", }),
    fullname: z.string().min(10, { message: "Введите ФИО", }),
    email: z.string().min(2, { message: "Введите email", }),
    password: z.string().min(2, { message: "Введите пароль", }),
})

const SignIn = ({ setMode }: { setMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof signInSchema>) {
        console.log(values)
    }

    return (<Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[100%]" id="request-form">
            <h2 className="text-3xl">Вход</h2>
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="WiseDream" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="********" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

            <div className="flex justify-end space-x-4 pt-[12px]">
                <Button onClick={() => { setMode(false) }}>Регистрация</Button>
                <Button type="submit">Отправить</Button>
            </div>
        </form>
    </Form>)
}


const SignUp = ({ setMode }: { setMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            fullname: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof signUpSchema>) {
        console.log(values)
    }

    return (<Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[100%]" id="request-form">
            <h2 className="text-3xl">Регистрация</h2>
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="WiseDream" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="email@gmail.com" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="Иванов Максим Дмитриевич" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className="text-white" placeholder="********" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />

            <div className="flex justify-end space-x-4 pt-[12px]">
                <Button onClick={() => { setMode(true) }}>Вход</Button>
                <Button type="submit">Отправить</Button>
            </div>
        </form>
    </Form>)
}

export default function Developers() {
    const [mode, setMode] = useState<boolean>(true)

    return (
        <div className={`w-[400px] px-[24px] py-[20px] bg-neutral-900 rounded-md duration-500 flex items-center ${mode ? 'h-[40vh]' : 'h-[64vh]'}`}>
            <AnimatePresence mode="wait">
                {mode
                    ? <motion.div className="flex items-center w-[100%] h-[100%]" key="sign-in" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0 }}><SignIn setMode={setMode} /></motion.div>
                    : <motion.div className="flex items-center w-[100%] h-[100%]" key="sign-up" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: 0 }}><SignUp setMode={setMode} /></motion.div>
                }
            </AnimatePresence>
        </div>
    )
}