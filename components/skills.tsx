"use client";
import Image from "next/image";
import Marquee from "./marquee";
import { useState } from "react";
import { heart } from "@/public";
import { skillsData } from "@/constants";

export default function Skills() {
	const [hovered, setHovered] = useState(-0.5);

	return (
		<section className="w-full bg-[#1c1c1c] overflow-hidden">
			<div className="w-full flex items-center gap-10">
				<div className="w-full h-[2px] bg-white/20" />
				<Image
					src={heart}
					alt="heartImg"
					width={30}
					height={30}
				/>
				<div className="w-full h-[2px] bg-white/20" />
			</div>
			<div
				className="w-full flex flex-col gap-[30px]"
				onMouseEnter={() => setHovered(-0.3)}
				onMouseLeave={() => setHovered(-0.5)}>
				<Marquee baseVelocity={hovered}>
					<div className="flex m-0 gap-x-[100px] items-center mr-[40px]">
						{[...skillsData, ...skillsData].map((item) => (
							<div
								className="py-10"
								key={item.id}>
								<h1
									className={`text-[20px] leading-tight tracking-tight font-silkaBold transition-all duration-200 ease-linear text-white`}>
									{item.title}
								</h1>
							</div>
						))}
					</div>
				</Marquee>
			</div>
			<div className="w-full h-[2px] bg-white/20" />
		</section>
	);
}
