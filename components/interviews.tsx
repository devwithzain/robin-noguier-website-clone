"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { talkInterItems } from "@/constants";

export default function Interviews() {
	const [hoverd, setHoverd] = useState(false);
	return (
		<div className="w-full py-20 flex items-center justify-center">
			<div className="w-[90%] flex gap-10 flex-wrap justify-between">
				{talkInterItems.map((item) => (
					<div
						className="w-[400px] h-[350px] rounded-[20px] shrink-0 relative overflow-hidden group"
						key={item.id}
						onMouseEnter={() => setHoverd(true)}
						onMouseLeave={() => setHoverd(false)}>
						<Image
							src={item.src}
							alt="partnerImg"
							className="w-full object-cover -translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
							width={400}
							height={250}
						/>
						<motion.h1
							whileHover={
								hoverd
									? { backgroundColor: item.color }
									: { backgroundColor: item.color }
							}
							className={`absolute bottom-0  text-white py-10 group-hover:py-4 w-full rounded-b-lg tracking-wider font-silkaBold font-medium px-10 text-[16px] group-hover:bottom-0 ease-in-out  transition-all duration-500 flex flex-col gap-1`}
							style={{
								backgroundColor: item.hoverColor,
							}}>
							{item.title}
							<p className="text-white w-full rounded-b-lg tracking-wider font-silkaBold font-medium text-[16px]">
								{item.para}
							</p>
						</motion.h1>
					</div>
				))}
			</div>
		</div>
	);
}
