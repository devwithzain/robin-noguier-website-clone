"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
	Awards,
	Inform,
	Interviews,
	PartnerClient,
	Skills,
} from "@/components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useScroll, useTransform, motion } from "framer-motion";
import {
	aboutImg,
	dribbble,
	insta,
	linkedin,
	robin1,
	robinEmoji,
	robinR,
	twitter,
} from "@/public";
import { myWorkItems } from "@/constants";

export default function HeroAbout() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<>
			<div className="w-full h-[10vh] z-[999] flex items-center justify-between fixed top-0 left-0 padding-x">
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
				{/* Carousel */}
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold uppercase font-bold leading-tight tracking-wide text-white`}>
							In life
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaBold leading-normal font-medium tracking-wide text-white`}>
							I’m the guy who always organizes the holiday trips, and I usually
							send the most messages on my family’s WhatsApp group. I’m a
							passionate world traveler (40+ countries). In my ten year career
							as an amateur boxer, I have an impressively unimpressive unbeaten
							record (1-0-0). I always eat standing up because those calories
							don’t count.
						</p>
					</div>
				</div>
				<div className="my-20">
					<Skills />
				</div>
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold uppercase font-bold leading-tight tracking-wide text-white`}>
							Happy clients for a happy life
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
							I’ve worked for a lot of big-name companies, both at agencies and
							as a freelancer. A lot of it is under NDA or just plain old, but
							that won’t stop me from dropping some names to imply that I’m kind
							of a big deal.
						</p>
					</div>
				</div>
				<PartnerClient />
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
							6+ years around the world to turn a passion into a job
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
							Unlike the Spice Girls, I think that if you want my future, you
							shouldn’t forget about my past. Those experiences made me the
							designer and the man I am today.
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-center py-20">
					<div className="w-[60%] flex">
						<div className="w-1/2 flex flex-col gap-10">
							{myWorkItems.map((item) => (
								<>
									{item.col1?.map((link) => (
										<div
											className="flex gap-10 group"
											key={link.id}>
											<div className="w-[180px] rounded-lg relative">
												<Image
													src={link.src1}
													alt="robinRImg"
													width={180}
													height={100}
													className="rounded-lg"
												/>
												<Image
													src={link.src2}
													alt="robinRImg"
													width={180}
													height={100}
													className="rounded-lg  absolute top-0 left-0 group-hover:opacity-0 duration-300 ease-in-out"
												/>
											</div>
											<div className="flex flex-col gap-2 cursor-pointer">
												<h1
													className={`text-[16px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
													{link.title}
												</h1>
												<p
													className={`text-[25px] font-silkaBold leading-tight text-white`}>
													{link.heading}
												</p>
												<p
													className={`text-[14px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
													{link.country}
												</p>
											</div>
										</div>
									))}
								</>
							))}
						</div>
						<div className="h-auto w-[1px] bg-white/20" />
						<div className="w-1/2 flex flex-col gap-10 ml-20">
							{myWorkItems.map((item) => (
								<>
									{item.col2?.map((link) => (
										<div
											className="flex gap-10 group"
											key={link.id}>
											<div className="w-[180px] rounded-lg relative">
												<Image
													src={link.src1}
													alt="robinRImg"
													width={180}
													height={100}
													className="rounded-lg"
												/>
												<Image
													src={link.src2}
													alt="robinRImg"
													width={180}
													height={100}
													className="rounded-lg  absolute top-0 left-0 group-hover:opacity-0 duration-300 ease-in-out"
												/>
											</div>
											<div className="flex flex-col gap-2 cursor-pointer">
												<h1
													className={`text-[16px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
													{link.title}
												</h1>
												<p
													className={`text-[25px] font-silkaBold leading-tight text-white`}>
													{link.heading}
												</p>
												<p
													className={`text-[14px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
													{link.country}
												</p>
											</div>
										</div>
									))}
								</>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
							Writings, interviews & talks
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
							I believe being a designer is more than pushing pixels so if you
							want to know more about me, you can watch my talks, listen to my
							podcast, or read my interviews.
						</p>
					</div>
				</div>
				<Interviews />
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
							Awards & recognitions
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
							I’ve worked on lots of projects that have won awards and even got
							some myself. But awards are like money: good to get but better to
							give away. Which is why I’ve loved being on the international jury
							for Awwwards and Webby Awards for the past few years.
						</p>
					</div>
				</div>
				<Awards />
				<div className="w-full flex justify-center padding-x py-20">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[90%] text-[80px] font-ekselldisplaySmall font-medium leading-tight tracking-wide text-white`}>
							Whenever, wherever. We&apos;re meant to work together.
						</h1>
					</div>
				</div>
				<div className="w-full flex justify-center padding-x pb-20 flex-col items-center">
					<div className="w-[65%] flex gap-3 justify-between">
						<h1
							className={`w-[40%] text-[22px] font-silkaBold font-bold leading-tight tracking-wide text-white`}>
							Contact me for full-time jobs, freelance projects, design advices
							or just to say hello
						</h1>
						<p
							className={`w-[60%] text-[24px] font-silkaRegular leading-normal font-medium tracking-wide text-white`}>
							I have an inbox zero rule so I’ll see your message for sure and,
							I’ll reply with at least one smiley. I promise.
						</p>
					</div>
					<div className="w-[65%] flex items-center pt-20 justify-between">
						{[twitter, linkedin, dribbble, insta].map((item, index) => (
							<Image
								key={index}
								src={item}
								alt="socialImgs"
								width={40}
								height={40}
								className="cursor-pointer hover:scale-110 duration-300 ease-in-out hover:-translate-y-1"
							/>
						))}
					</div>
				</div>
				<div className="w-full flex justify-between gap-5 items-center py-10 padding-x">
					<div className="flex items-center gap-5">
						<Image
							src={robinEmoji}
							alt="robinRImg"
							width={100}
							height={100}
						/>
						<p className="text-[16px] font-silkaRegular leading-tight font-medium text-white">
							Code by
							<span className="underline cursor-pointer">Lorenzo Cadamuro</span>
						</p>
					</div>
					<div>
						<p className="text-[16px] font-silkaRegular leading-tight font-medium text-white">
							The end
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
