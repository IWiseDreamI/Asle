"use client";
import { delay, motion } from "framer-motion";
import { Plaster } from "next/font/google";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

const plaster = Plaster({ subsets: ["latin"], style: ["normal"], weight: ["400"] });

const content = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 2,
			duration: 1,
		}
	}
};

const container = {
	hidden: { opacity: 0, scale: 0.5, duration: 5000 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
			duration: 0.6,
		}
	}
};

const containerItem = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
	// hover: { scale: 1.1, color: "red" }
};

const codeStrings = [
	`"use client";

export default function Main(){	
	useEffect(() => {
		const textHeader = document.querySelector("#text-header")
		const pageContent = document.querySelector("#page-content")

		pageContent.style.width = textHeader.clientWidth + "px"
	}, [])

	return (<ⅾiⅴ>Hello, Guest <3 </ⅾiⅴ>;)
} // by WiseDream`,
	`console.log("Hello, World <3 #WiseDream")`,
]

export default function Home() {
	const textStart = "IT Deve".split("")
	const textEnd = "tnempol".split("")

	useEffect(() => {
		const textHeader = document.querySelector("#text-header") as HTMLElement
		const pageContent = document.querySelector("#page-content") as HTMLElement

		pageContent.style.width = `${textHeader.clientWidth}px`
	}, [])

	return (
		<>
			<h1 id="text-header" className={`${plaster.className} text-8xl text-center leading-tight select-none flex`}>
				<motion.div className="flex" variants={container} initial="hidden" animate="visible">
					{textStart.map((item, i) => {
						return (
							<motion.span key={`${item}${i}`} variants={containerItem} className="inline-block hover:scale-105 min-w-[2rem] duration-500">
								{item}
							</motion.span>
						)
					})}
				</motion.div>
				<motion.div className="flex flex-row-reverse" variants={container} initial="hidden" animate="visible">
					{textEnd.map((item, i) => {
						return (
							<motion.span key={`${item}${i}`} variants={containerItem} className="inline-block hover:scale-105 min-w-[2rem] duration-500">
								{item}
							</motion.span>
						)
					})}
				</motion.div>
			</h1>
			<motion.div id="page-content" className="flex justify-between mt-[24px] h-[30vh] items-start" variants={content} initial="hidden" animate="visible">
				<h3 className="w-[40%] text-xl">Мы специализируемся на разработке высококачественного программного обеспечения, которое помогает бизнесу достигать новых высот. Наша команда готова предложить комплексные решения, адаптированные под уникальные потребности вашего бизнеса.</h3>
				<code id="code-block" className="text-green-500 w-[56%] bg-black h-[100%] p-[16px] outline-none overflow-y-auto text-xs">
					<pre><Typewriter options={{ loop: true, autoStart: true, strings: codeStrings }} /></pre>
				</code>

			</motion.div>
		</>
	);
}
