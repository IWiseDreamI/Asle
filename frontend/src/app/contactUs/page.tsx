"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import React from "react";

const ContactCard = ({ text, value, type, link, btnText }: { text: string, value: string, type: string, link: string, btnText: string }) => {
    const copyToClipboard = (e: React.MouseEvent) => {
        const item = e.target as HTMLElement

        toast("Скопировано в буфер", { description: item.innerText, })
        navigator.clipboard.writeText(item.innerText)
    }

    return (
        <Card className="flex flex-col justify-between w-[28%] h-[100%]">
            <CardHeader className="pb-0">
                <CardTitle className="flex items-center justify-center">
                    <img src={`icons/${type}.svg`} alt={type} className="w-[24px] mr-[12px]" />
                    <p className="text-3xl mr-[12px]">{text}</p>
                </CardTitle>
            </CardHeader>
            <CardContent className="py-0">
                <div onClick={copyToClipboard} className="flex items-center select-none justify-center cursor-pointer py-[8px] border-[1px] border-white rounded-md">
                    <img src={`icons/copy.svg`} alt="copy" className="w-[24px] mr-[12px]" />
                    <h3 className="text-xl mr-[12px]">{value}</h3>
                </div>
            </CardContent>
            <CardFooter className="flex w-[100%]">
                <Link href={link} className="w-[100%] flex items-center justify-center"><Button className="w-[60%]">{btnText}</Button></Link>
            </CardFooter>
        </Card>
    )
}

export default function Projects() {
    return (
        <>
            <div className="flex justify-between w-[72vw] h-[30vh]">
                <ContactCard text="Телефон" value="+7-924-167-45-99" type="phone" link="tel:89241674599" btnText="Позвонить" />
                <ContactCard text="Telegram" value="@WiseDream" type="telegram" link="https://t.me/Wise_Dream" btnText="Связаться" />
                <ContactCard text="Email" value="asle@asle.com" type="mail" link="mailto:asle@asle.com" btnText="Написать" />
            </div>
        </>
    );
}
