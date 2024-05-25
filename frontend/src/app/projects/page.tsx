"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const technologies: technology[] = [
    {
        id: 1,
        name: "NextJS",
        image: "next.svg",
        description: ""
    }
]

const users: user[] = [
    {
        id: 1,
        name: "WiseDream",
        bio: "Nevermind",
        image: "cat.png",
        stack: [technologies[0]]
    }
]

const projectsData: project[] = [
    {
        id: 1,
        name: "UnitedB&B",
        type: "site",
        users: [users[0]],
        images: ["unitedb&b.jpg"],
        stack: [technologies[0]],
        description: "Сервис по бронированию жилья, специально разработанный для путешественников и профессионалов, работающих в условиях Крайнего Севера."
    },
    {
        id: 2,
        type: "telegram",
        name: "Языковой бот спортивной лексики",
        users: [users[0]],
        images: ["coa.jpg"],
        stack: [technologies[0]],
        description: "Языковой телеграм бот, созданный для изучения спортивной лексики на английском языке. Бот помогает быстро и легко освоить терминологию различных видов спорта."
    },
    {
        id: 3,
        name: "МФЦ электронная очередь",
        type: "ai",
        users: [users[0]],
        images: ["queue.jpg"],
        stack: [technologies[0]],
        description: "Cистема для удобного и эффективного распределения электронной очереди, созданная для оптимизации обслуживания клиентов и сокращения времени ожидания.  "
    },
    {
        id: 4,
        name: "Бот для зоопарка",
        type: "telegram",
        users: [users[0]],
        images: ["zoo.jpg"],
        stack: [technologies[0]],
        description: "Телеграм бот, созданный для посетителей зоопарка. Создан для предоставления актуальной и полезной информацию о животных, маршрутах, мероприятиях и услугах зоопарка."
    },
]

export default function Projects() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) { return }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => { setCurrent(api.selectedScrollSnap() + 1) })
    }, [api])


    return (
        <>
            <Carousel
                opts={{ align: "start", loop: true }}
                className="w-[90vw]"
                setApi={setApi}
            >
                <CarouselContent className="py-[12vh]">
                    {projectsData.map((project, index) => (
                        <CarouselItem key={index} id={`project-${index}`} className={`md:basis-1/2 lg:basis-1/3 flex justify-center`}>
                            <div className="p-2 flex justify-center w-[100%] select-none">
                                <div className={`relative flex flex-col justify-center duration-500 w-[100%] ${current % count == index ? "scale-125" : "scale-75"}`}>
                                    <div className="w-[100%] relative">
                                        <Image width={1024} height={512} className="w-[100%]" src={`/images/projects/${project.images[0]}`} alt="" />
                                        <div className="rounded-full w-[32px] h-[32px] bg-black absolute right-[12px] top-[8px]">
                                            <img src={`icons/${project.type}.svg`} alt="" />
                                        </div>
                                        <AnimatePresence>
                                            {current % count == index
                                                ? <motion.div
                                                    key={`${project.name}-content`} className="flex flex-col duration-500 absolute bottom-0 left-0 px-[12px] py-[8px] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                >
                                                    <h3 className="text-lg mb-[4px]">{project.name}</h3>
                                                    <p className="text-xs">{project.description}</p>
                                                </motion.div>
                                                : undefined
                                            }
                                        </AnimatePresence>
                                    </div>
                                </div>
                                {/* <Card >
                                    <CardHeader>
                                        <h2>{project.name}</h2>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-center p-6">

                                    </CardContent>
                                </Card> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}
