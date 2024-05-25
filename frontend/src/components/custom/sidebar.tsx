"use client";
import { usePathname } from 'next/navigation'
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Calendar,
    Settings,
    User, Folder,
    MessageCircle, Menu,
    FileSliders
} from "lucide-react"
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="h-6 w-6 cursor-pointer " />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <Command className="absolute left-0 top-[12vh] w-[100%] h-[88vh] rounded-none px-[12px]">
                    <CommandList>
                        <CommandGroup>
                            <Link href="/admin">
                                <CommandItem className={`${pathname == "/admin" ? "bg-accent" : undefined}`}>
                                    <FileSliders className="mr-2 h-4 w-4" />
                                    <Link href="/admin">Admin</Link>
                                </CommandItem>
                            </Link>
                            <Link href="/profile">
                                <CommandItem className={`${pathname == "/profile" ? "bg-accent" : undefined}`}>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </CommandItem>
                            </Link>
                            <Link href="/settings">
                                <CommandItem className={`${pathname == "/settings" ? "bg-accent" : undefined}`}>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </CommandItem>
                            </Link>
                            <Link href="/tasks">
                                <CommandItem className={`${pathname == "/tasks" ? "bg-accent" : undefined}`}>
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>Tasks</span>
                                </CommandItem>
                            </Link>
                            <Link href="/chats">
                                <CommandItem className={`${pathname == "/chats" ? "bg-accent" : undefined}`}>
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    <span>Chats</span>
                                </CommandItem>
                            </Link>
                            <Link href="/projects">
                                <CommandItem className={`${pathname == "/projects" ? "bg-accent" : undefined}`}>
                                    <Folder className="mr-2 h-4 w-4" />
                                    <span>Projects</span>
                                </CommandItem>
                            </Link>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </SheetContent>
        </Sheet>

    )
}

export default Sidebar;