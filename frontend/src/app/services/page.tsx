import RequestForm from "@/components/custom/request-form";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const services: service[] = [
    {
        name: "Веб приложение",
        type: "site",
        description: "Разработка веб сайтов любого вида на NextJS + Django",
        price: "От 500$ до 4000$",
        time: "От 1 до 6 месяцев"
    },
    {
        name: "Телеграм бот",
        type: "telegram",
        description: "Разработка Telegram ботов для различных целей на Python",
        price: "От 400$ до 1000$",
        time: "От 1 до 3 месяцев"
    },
    {
        name: "Приложение",
        type: "app",
        description: "Разработка приложений на Kotlin + Django",
        price: "От 500$ до 4000$",
        time: "От 1 до 6 месяцев"
    },
    {
        name: "AI модель",
        type: "ai",
        description: "Lorem ipsum dolor sit a met",
        price: "От 500$ до 4000$",
        time: "От 1 до 4 месяцев"
    },
]

export default function Services() {
    return (
        <Carousel className="w-[80vw]">
            <CarouselContent className="-ml-1">
                {services.map((item, index) => {
                    return (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center">
                            <Card className="w-[90%] h-[420px] flex flex-col justify-between" key={item.name}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <img src={`icons/${item.type}.svg`} alt={item.type} className="w-[40px] mr-[24px]" />
                                        {item.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex-col px-[8px] mb-[12px]">
                                        <div className="flex mb-[8px]">
                                            <img src={`icons/info.svg`} alt={item.type} className="w-[24px] mr-[12px]" />
                                            <h3 className="text-lg font-semibold">Услуга:</h3>
                                        </div>
                                        <h3>{item.description}</h3>
                                    </div>
                                    <div className="flex-col px-[8px] mb-[12px]">
                                        <div className="flex mb-[8px]">
                                            <img src={`icons/time.svg`} alt={item.type} className="w-[24px] mr-[12px]" />
                                            <h3 className="text-lg font-semibold">Сроки:</h3>
                                        </div>
                                        <h3>{item.time}</h3>
                                    </div>
                                    <div className="flex-col px-[8px]">
                                        <div className="flex mb-[8px]">
                                            <img src={`icons/price.svg`} alt={item.type} className="w-[24px] mr-[12px]" />
                                            <h3 className="text-lg font-semibold">Стоимость:</h3>
                                        </div>
                                        <h3>{item.price}</h3>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex w-[100%]">
                                    <RequestForm btnClass="w-[100%]" type={item.type} />
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
}
