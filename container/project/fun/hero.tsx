"use client";
import { useRef } from "react";
import { ProjectNavbar } from "@/components";
import { FaArrowDownLong } from "react-icons/fa6";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroFun() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const rt = useTransform(scrollYProgress, [0, 1], [0, 4]);
	const st = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const mq = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const ug = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const iy = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return (
		<div
			className="w-full h-screen bg-[#D5DEDD] padding-x relative -z-10 overflow-hidden"
			data-scroll
			data-scroll-speed="-1"
			ref={container}>
			<ProjectNavbar />
			<div className="w-full h-full items-end justify-end flex">
				<div className="w-full flex flex-col gap-16 py-10">
					<div className="flex gap-32 items-center">
						<motion.div style={{ y: mq }}>
							<h1 className="leading-[1] tracking-wide text-[180px] font-ekselldisplayLarge font-bold">
								Fun
							</h1>
						</motion.div>
						<motion.div
							style={{ rotate: rt, y: iy }}
							className="overflow-hidden">
							<motion.img
								src="/project-1.avif"
								alt="fun-image"
								className="w-[70%] object-cover"
								style={{ scale: st }}
							/>
						</motion.div>
					</div>
					<div className="w-full flex items-center justify-center">
						<motion.div
							className="flex items-center justify-center w-16 cursor-pointer h-16 rounded-full bg-black p-3 group"
							style={{ y: ug }}>
							<FaArrowDownLong
								size={20}
								className="font-normal group-hover:translate-y-1 duration-300 ease-in-out text-white"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
