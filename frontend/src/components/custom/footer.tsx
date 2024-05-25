import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-[2vh] bg-neutral-900 w-[100vw] px-[10vw] flex flex-col space-y-3 items-center">
            <hr className="w-full bg-white" />
            <div className="flex justify-between w-full">
                <div className="w-[40%] flex justify-between">
                    <Link href="/services">УСЛУГИ</Link>
                    <Link href="/contactUs">КОНТАКТЫ</Link>
                    <Link href="/developers">РАЗРАБОТЧИКАМ</Link>
                </div>
                <Link href="/politics">ПОЛИТИКА</Link>
            </div>
            <hr className="w-full bg-white" />
            <div className="flex justify-between w-full">
                <div className="flex justify-between select-none">
                    <Link href="https://t.me/team_pixel2022"><img className="w-[24px] mr-[24px]" src="icons/telegram.svg" alt="telegram" /></Link>
                    <Link href="mailto:asle@asle.com"><img className="w-[24px] mr-[24px]" src="icons/mail.svg" alt="mail" /></Link>
                    <Link href="https://github.com/TEAM-PIXEL-CAT"><img className="w-[24px]" src="icons/github.svg" alt="github" /></Link>
                </div>
                <h4>Asle © 2024</h4>
            </div>

        </footer>
    );
}
