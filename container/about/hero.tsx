"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Inform } from "@/components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useScroll, useTransform, motion } from "framer-motion";
import { aboutImg, dribbble, insta, linkedin, twitter } from "@/public";

export default function HeroAbout() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<>
			<div className="w-full h-[10vh] flex items-center justify-between fixed top-0 left-0 padding-x">
				<div>
					<Link
						className="flex items-center gap-3 group leading-tight tracking-wider text-[16px] font-silkaRegular font-bold uppercase text-white cursor-pointer"
						href="/">
						<FaArrowLeftLong
							size={24}
							className="font-normal group-hover:-translate-x-1 duration-300 ease-in-out text-white"
						/>
						back to home
					</Link>
				</div>
				<div className="overflow-hidden">
					<div className="bg-[#CA0138] p-5 rounded-full cursor-pointer">
						<Link
							href="mailto:noguier.robin@gmail.com"
							className="text-[16px] leading-tight tracking-widest uppercase font-silkaRegular text-white font-bold">
							noguier.robin@gmail.com
						</Link>
					</div>
				</div>
			</div>
			<div
				className="w-full h-screen bg-[#1C1C1C]"
				ref={container}>
				<div className="w-full h-full items-center flex">
					<div className="w-full h-full flex items-center gap-16">
						<div className="w-1/2 h-full flex items-center justify-center">
							<motion.div className="w-full h-full overflow-hidden">
								<Image
									src={aboutImg}
									alt="aboutImg"
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
						<div className="w-1/2">
							<motion.div
								className=""
								style={{ y: mq }}>
								<h1 className="-translate-x-60 leading-[1] tracking-wide text-[200px] font-ekselldisplayLarge text-white">
									Bonjour, <br /> I&apos;m Robin
								</h1>
							</motion.div>
							<div className="flex flex-col gap-10 w-full">
								<div className="w-[80%]">
									<p className="text-[30px] font-silkaRegular text-white leading-tight tracking-wide py-5">
										I&apos;m a french designer based in Portugal. I&apos;m
										available for full-time roles, freelance projects and design
										advicing.
									</p>
								</div>
								<div className="w-[70%] flex items-center gap-24">
									{[twitter, linkedin, dribbble, insta].map((item, index) => (
										<Image
											key={index}
											src={item}
											alt="socialImgs"
											width={30}
											height={30}
											className="cursor-pointer hover:scale-110 duration-300 ease-in-out"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-[#1c1c1c]">
				<div className="flex items-center justify-center w-full pt-40">
					<h1 className="w-[65%] text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
						I design digital products and websites for startups, brands, and
						entrepreneurs with cool projects.
					</h1>
				</div>
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold uppercase font-bold leading-tight tracking-wide text-white`}>
							At work
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaBold leading-normal font-medium tracking-wide text-white`}>
							I ask a lot of questions to understand the problems my clients
							want to solve and the goals they want to achieve. I then create
							high-fidelity wireframes that aim to address those goals. Those
							wireframes get turned into visual interfaces, sometimes with
							subtle motion effects, to be prototyped and tested with real
							people.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
