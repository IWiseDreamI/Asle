"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Form, FormControl,
    FormDescription, FormField,
    FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select, SelectContent,
    SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import { Button } from "../ui/button"

const formSchema = z.object({
    username: z.string().min(2, { message: "Введите ФИО", }),
    email: z.string().min(2, { message: "Введите корректную почту", }).email(),
    type: z.string().min(1, { message: "Выберите услугу", }),
    description: z.string().min(10, { message: "Слишком короткое описание проекта.", })
        .max(500, { message: "Слишком длинное описание проекта.", }),
})

export function FormBody({ setOpen, type }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, type?: serviceTypes }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            type: type ? type : "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setOpen(false)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-[20px]" id="request-form">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ФИО</FormLabel>
                            <FormControl>
                                <Input className="text-white" placeholder="Иванов Андрей Максимович" {...field} />
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
                                <Input className="text-white" placeholder="example@gmail.com" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Услуга</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl className={`${field.value ? 'text-white' : ''}`}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Выберите тип услуги" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="site" className="text-white">Веб приложение (Сайт)</SelectItem>
                                    <SelectItem value="app" className="text-white">Мобильное приложение</SelectItem>
                                    <SelectItem value="telegram">Телеграм бот</SelectItem>
                                    <SelectItem value="ai">AI</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Описание проекта</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Разработка сервиса по ..."
                                    className="resize-none text-white"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className="flex justify-end space-x-4 pt-[12px]">
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <Button type="submit">Отправить</Button>
                </div>
            </form>
        </Form>
    )
}


export default function RequestForm({ className, btnClass, type }: { className?: string, btnClass?: string, type?: serviceTypes }) {
    const [open, setOpen] = useState(false);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger className={`font-bold text-base bg-white text-black rounded-md py-[8px] px-[20px] ${btnClass ? btnClass : ""}`}>Заказать</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-3xl">Отправить заявку</AlertDialogTitle>
                    <AlertDialogDescription>
                        <FormBody setOpen={setOpen} type={type} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
