"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectItems } from "@/constants";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Project() {
	return (
		<>
			{projectItems.map((item) => (
				<div
					className="w-full h-screen flex items-center justify-between padding-x gap-5"
					style={{ backgroundColor: item.bgColor }}
					key={item.id}>
					<div className="w-1/2 h-full flex items-end">
						<div className="w-full h-[70%] justify-between flex flex-col gap-5">
							<div className="w-full flex flex-col gap-5">
								<div>
									<h1
										className="leading-[1] tracking-wide text-[170px] font-ekselldisplayLarge font-bold"
										style={{ color: item.headingColor }}>
										{item.title}
									</h1>
								</div>
								<div>
									<p
										className="leading-normal tracking-wide text-[20px] font-silkaRegular font-medium w-[70%]"
										style={{ color: item.paraColor }}>
										{item.description}
									</p>
								</div>
								<Link
									className="flex items-center gap-4 mt-3 group"
									href={item.href}>
									<p
										className="leading-tight tracking-[3px] text-[16px] font-silkaRegular font-bold uppercase"
										style={{ color: item.paraColor }}>
										{item.linkText}
									</p>
									<FaArrowRightLong
										size={24}
										className="font-normal group-hover:translate-x-1 duration-300 ease-in-out"
										style={{ color: item.headingColor }}
									/>
								</Link>
							</div>
							<div
								className="mb-16 w-fit h-[200px] rounded-md border-[5px] overflow-hidden"
								style={{ borderColor: item.headingColor }}>
								<motion.video
									animate={{ scale: [1, 1.1, 1] }}
									transition={{
										duration: 2,
										ease: "easeInOut",
										repeat: Infinity,
										repeatType: "mirror",
									}}
									muted
									autoPlay
									loop
									src={item.video}
									className="w-full h-full object-contain"
								/>
							</div>
						</div>
					</div>
					<motion.div
						animate={{ y: [8, -8] }}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "mirror",
						}}
						className="w-[45%] cursor-pointer">
						<Link
							className="flex items-center gap-4 mt-3 group"
							href={item.href}>
							<Image
								src={item.img}
								alt={item.title + "image"}
								width={800}
								height={400}
								className="w-full object-cover skew-y-6 rotate-[1deg]"
							/>
						</Link>
					</motion.div>
				</div>
			))}
		</>
	);
}
