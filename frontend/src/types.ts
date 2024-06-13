type serviceTypes = "telegram" | "site" | "app" | "ai"

type project = {
    id: number,
    name: string,
    type: serviceTypes,
    users: user[],
    images: string[],
    stack: technology[],
    description: string,
}

type technology = {
    id: number,
    name: string,
    image: string,
    description: string
}

type user = {
    id: number,
    email: string,
    username: string,
    bio: string,
    image: string,
    stack: technology[]
}

type service = {
    name: string,
    type: serviceTypes,
    description: string,
    price: string,
    time: string
}
