"use client";
import Link from "next/link";
import Image from "next/image";
import { Inform, ParallaxImg, Video } from "@/components";
import {
	esperanto16,
	esperanto17,
	esperanto18,
	esperanto19,
	esperanto2,
	esperanto20,
	esperanto3,
	esperanto4,
	esperanto5,
} from "@/public";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { esperantoInterItems, esperantoLearnerItems } from "@/constants";

export default function MainFeed() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const ww = useTransform(scrollYProgress, [0, 1], [0, 4500]);

	return (
		<>
			<Video
				className="text-black"
				videoSrc="/esperanto1.mp4"
				text="Esperanto.design is out, better check it out (please come back after)"
			/>
			<div className="w-full flex items-center justify-center py-20">
				<div className="w-full flex flex-col gap-20">
					<div className="w-full flex items-center justify-center">
						<div className="w-[70%] flex flex-col">
							<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
								01
							</h1>
							<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
								Interviews & Content
							</h1>
						</div>
					</div>
					<Inform
						className="text-black"
						title="Finding the right people and asking the right questions"
						para="I knew nothing about interviews so I started by learning more about journalism. I also read a ton of interviews about creatives to detect the common questions that I should avoid in order to be original."
					/>
				</div>
			</div>
			<Inform
				className="text-black"
				title="Teach the game!"
				para="	A few key principles were crucial to explain well on the first
						experience."
			/>
			<div className="w-full flex flex-col py-20 gap-10 padding-x">
				<div className="w-full flex items-center justify-between gap-y-12 flex-wrap">
					{esperantoInterItems.map((item) => (
						<Image
							key={item.id}
							src={item.img}
							alt="take1Image"
							className="w-[400px]"
						/>
					))}
				</div>
				<div className="w-full flex items-center justify-center">
					<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide">
						Interviewing 16 creatives in 16 different countries.. it only took
						me a year and around 116 334 kms
					</p>
				</div>
			</div>
			<Inform
				className="text-black"
				title="1 - Finding creatives"
				para="I wasn’t looking for the most famous creative or the best at their crafts. I was trying to find someone who deserves recognition. I wrote more emails than I can remember and the answering ratio wasn’t great but I kept pushing."
			/>
			<Inform
				className="text-black"
				title="2 - Interviewing"
				para="I went to 16 different workplaces. I got to see from the inside how creative people work across the globe and I was able to connect with them in a personal way. It usually took half a day to meet, get a tour of the office, do the interview, and take the pictures. We often went to grab some food afterward."
			/>
			<div className="w-full padding-x py-5">
				<ParallaxImg src={esperanto2} />
				<div className="w-full flex items-center justify-center py-5">
					<p className="text-sm font-silkaRegular text-black/60 font-semibold leading-tight tracking-wide">
						Souvenir from Sri Lanka with Lahesh Kavinda in January 2018
					</p>
				</div>
			</div>
			<Inform
				className="text-black"
				title="3 - Transcripting"
				para="I had approximately an hour and a half of audio recording to transcript after each interview. I decided to do it myself (and not pay a service) to analyze my way of interviewing in order to improve."
			/>
			<Inform
				className="text-black"
				title="4 - Rewriting & gathering assets"
				para="Once the transcript was done, I needed to tweak some sentences to make it clearer and understandable. Almost none of the creative were native English speakers so I needed to make some changes without altering the essence nor the personality of the creative."
			/>
			<div className="w-full flex items-center justify-center py-20">
				<div className="w-full flex flex-col gap-20">
					<div className="w-full flex items-center justify-center">
						<div className="w-[70%] flex flex-col">
							<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
								02
							</h1>
							<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
								Photography
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x py-10 flex flex-col gap-3">
				<div className="w-full flex justify-between gap-10">
					<div className="w-1/2">
						<Image
							src={esperanto3}
							alt="photographyImg"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-1/2">
						<Image
							src={esperanto4}
							alt="photographyImg"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="w-full flex items-center justify-center py-5">
					<p className="text-sm font-silkaRegular text-black/60 font-semibold leading-tight tracking-wide">
						Me shooting Mikiko Kikuoka in the streets of Tokyo, Japan 🇯🇵
					</p>
				</div>
			</div>
			<Inform
				className="text-black"
				title="Learning Photography"
				para="I learned the basics of photography and, I watched countless videos on how to direct photoshoots. I knew I wanted to take all the pictures myself because I think it’s the best way to learn and I thought it was a valuable skill to learn as a designer."
			/>
			<div className="w-full flex flex-col py-20 gap-10 padding-x">
				<div className="w-full flex items-center justify-between gap-y-12 flex-wrap">
					{esperantoLearnerItems.map((item) => (
						<Image
							key={item.id}
							src={item.img}
							alt="take1Image"
							className="w-[400px]"
						/>
					))}
				</div>
				<div className="w-full flex items-center justify-center">
					<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide">
						Interviewing 16 creatives in 16 different countries.. it only took
						me a year and around 116 334 kms
					</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-center py-20">
				<div className="w-full flex flex-col gap-20">
					<div className="w-full flex items-center justify-center">
						<div className="w-[70%] flex flex-col">
							<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
								03
							</h1>
							<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
								Visual Identity
							</h1>
						</div>
					</div>
				</div>
			</div>
			<Inform
				className="text-[#0d0d0d]"
				title="Art Direction that match the concept"
				para="I wanted the overall style to evoke travels, the adventures, and the personal connections that the Esperanto project represented. To do so, I knew I wanted a primary font with a humanist feel to it and a hand-drawn logo. This wordmark would look almost like what you draw on a notebook while looking trough the window on a long bus ride."
			/>
			<div className="w-full flex items-center justify-center py-20 padding-x">
				<div className="w-[88%] flex gap-10 justify-between">
					<div className="w-[60%] flex flex-col gap-5">
						<div className="w-[80%] flex flex-col">
							<h1 className="text-[18px] font-silkaBold font-medium text-black leading-tight tracking-wide uppercase">
								Typography
							</h1>
							<h1 className="text-[100px] font-ekselldisplayLargel font-bold text-black leading-tight tracking-tight">
								Geomanist <br />
								Aa123
							</h1>
						</div>
						<div className="w-[80%] flex flex-col mt-20">
							<h1 className="text-[70px] font-ekselldisplaySmall font-thin text-black leading-tight tracking-wide">
								Freight Text
							</h1>
							<h1 className="text-[70px] font-ekselldisplaySmall font-thin text-black leading-tight tracking-tight">
								Aa123
							</h1>
						</div>
					</div>
					<div className="w-[40%] flex flex-col gap-5">
						<h1 className="text-[18px] font-silkaBold font-medium text-black leading-tight tracking-wide uppercase">
							Colors
						</h1>
						<div className="w-full py-5 px-3 bg-[#FC262D] rounded-md">
							<p className="text-[22px] font-silkaRegular text-white leading-tight tracking-wide uppercase">
								#FC262D
							</p>
						</div>
						<div className="w-full py-5 px-3 bg-[#0d0d0d] rounded-md">
							<p className="text-[22px] font-silkaRegular text-white leading-tight tracking-wide uppercase">
								#0d0d0d
							</p>
						</div>
						<div className="w-full py-5 px-3 bg-[#f5f5f5] rounded-md  border border-black/10">
							<p className="text-[22px] font-silkaRegular text-black leading-tight tracking-wide uppercase">
								#f5f5f5
							</p>
						</div>
						<div className="w-full py-5 px-3 bg-[#ffffff] rounded-md  border border-black/10">
							<p className="text-[22px] font-silkaRegular text-black leading-tight tracking-wide uppercase">
								#ffffff
							</p>
						</div>
					</div>
				</div>
			</div>
			<Video
				className="text-black"
				videoSrc="/esperanto7.mp4"
				text="Esperanto's Logo"
			/>
			<div className="w-full py-5 my-40">
				<ParallaxImg src={esperanto5} />
				<div className="w-full flex items-center justify-center py-5">
					<p className="text-sm font-silkaRegular text-black/60 font-semibold leading-tight tracking-wide">
						I had to wake up at 2 am to hike a mountain in front of the Bromo
						Mount in Indonesia to capture this sunrise. It was painful but
						totally worth it.
					</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-center">
				<div className="w-[70%] flex flex-col">
					<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
						04
					</h1>
					<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
						The Web Experience
					</h1>
				</div>
			</div>
			<Inform
				className="text-black"
				title="Creating a unique and memorable experience"
				para="I wanted something memorable that will draw people’s attention. I knew that if I could design a unique experience, it will have more visitors hence give more expositions to the creatives interviewed. The timeline representing my journey is how I decided to tell the unique Esperanto story. You can follow my journey and stop in any desired country to discover a different creative."
			/>
			<Video
				className="text-black mb-20"
				videoSrc="/esperanto8.mp4"
				text="Loader animation representing a compass loading from 0° to 360° that make you dive into the experience"
			/>
			<Video
				className="text-black mb-20"
				videoSrc="/esperanto9.mp4"
				text="Intro of the website to present the project and set the mood of the overall experience"
			/>
			<Inform
				className="text-black"
				title="Retracing linearly the journey"
				para="I knew I wanted a timeline to retrace linearly the journey I went through during the year of 2018. We decided to use the kind of vehicles I used the most in each country to add a bit of playfulness to the experience and help better tell the story."
			/>
			<Video
				className="text-black mb-20"
				videoSrc="/esperanto15.mp4"
				text="Timeline that presents all the creatives interviewed during the year of 2018."
			/>
			<Video
				className="text-black mb-20"
				videoSrc="/esperanto10.mp4"
				text="Finishing the timeline by a simple call to action for the next possible Esperanto."
			/>
			<Inform
				className="text-black"
				title="Giving exposition to everyone with a strong design concept"
				para="The problem with telling this story in chronological order with a timeline is that the creatives interviewed at the beginning of the trip get more exposition than the ones after. That’s why I created a menu that gives quick access and the same exposition to all the creatives."
			/>
			<div className="w-full bg-black">
				<Video
					className="text-white mb-20"
					videoSrc="/esperanto11.mp4"
					text="Menu to give a quick access to every articles"
				/>
				<Inform
					className="text-white"
					title="An about page to describe the Esperanto project"
					para="I didn't have a voice in this project. I needed a place to explain the Esperanto concept and this is where the about page came handy."
				/>
				<Video
					className="text-white mb-20"
					videoSrc="/esperanto12.mp4"
					text="About Page to talk about the Esperanto project"
				/>
				<Inform
					className="text-white"
					title="The importance of the handheld experience"
					para="As this project is meant to be shared and viewed in a lot of different countries, it was important to have a good experience regardless of the size of your screen."
				/>
				<div className="w-full flex items-center justify-center gap-10">
					<div className="rounded-[50px] object-cover w-[550px]">
						<Image
							src={esperanto18}
							alt="signupFlowImage"
							className="rounded-[50px]"
						/>
					</div>
					<video
						muted
						autoPlay
						loop
						src="/esperanto13.mp4"
						className="rounded-[50px] object-cover w-[550px]"
					/>

					<div className="rounded-[50px] object-cover w-[550px]">
						<Image
							src={esperanto19}
							alt="signupFlowImage"
							className="rounded-[50px]"
						/>
					</div>
				</div>
				<div className="w-full flex items-center justify-center mt-20">
					<div className="w-[70%] flex flex-col">
						<h1 className="text-[18px] font-silkaBold font-bold text-white leading-tight tracking-wide uppercase">
							05
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							What did I learn?
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Getting out of my comfort zone"
					para="Traveling for a year with only a backpack means you are experiencing new things every day. You need to adapt yourself to any situation, respect the cultures you are stepping into, know how to make decisions quickly, embrace the unknown, and many more."
				/>
				<Inform
					className="text-white"
					title="Listening to people"
					para="My biggest problem during the first interviews was to stop thinking about my next question and to actually listen to the answer to my previous one. I worked a lot on that and I think I’m a better listener now in so many ways"
				/>
				<div className="w-full py-5 my-10 padding-x">
					<ParallaxImg src={esperanto16} />
					<div className="w-full flex items-center justify-center py-5">
						<p className="text-sm font-silkaRegular text-black/60 font-semibold leading-tight tracking-wide">
							Interviewing Yuan Feng in Beijing, China 🇨🇳
						</p>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Learning to learn"
					para="Learning about photography, interviewing, audio editing, etc… made me better at learning new things."
				/>
				<Inform
					className="text-white"
					title="All that and way more.."
					para="When you are traveling, you are constantly asking yourself questions. You are always trying to figure out where to go, how to sleep, or what to eat. You are always packing and trying to take care of your belongings. You are always trying to learn new languages to be able to get around and interact with people. As far as I am concerned, all that learning and new experiences made Esperanto the experience of a lifetime."
				/>
				<div className="w-full py-5 my-10 padding-x">
					<ParallaxImg src={esperanto17} />
					<div className="w-full flex items-center justify-center py-5">
						<p className="text-sm font-silkaRegular text-black/60 font-semibold leading-tight tracking-wide">
							Showing the symmetry in the streets of Tokyo, Japan 🇯🇵
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex flex-col">
						<h1 className="text-[18px] font-silkaBold font-bold text-white leading-tight tracking-wide uppercase">
							06
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							Esperanto propelled the careers of designers
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title='"Far away but united by creativity"'
					para="The best way to understand the impact of Esperanto is to ask the interviewees how it impacted their career, their life, and their way of experiencing design in different cultures."
				/>
				<Video
					className="text-white mb-20"
					videoSrc="/esperanto14.mp4"
					text="Testimonial video from the Esperanto's Interviewees"
				/>
				<Inform
					className="text-white"
					title="Side projects can take you further than you expect!"
					para="I had the honor to talk in front of 1000 people at the Awwwards Conference in Amsterdam! I explained the 5 rules to go from a simple idea all the way to a launched project. I'm also describing my year-long journey around the world to build this Esperanto project!"
				/>
				<div className="w-full border border-black/10 mb-20">
					<Image
						src={esperanto20}
						alt="esperantoImg"
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="w-full flex items-center justify-center py-5">
						<p className="text-sm font-silkaRegular text-white font-semibold leading-tight tracking-wide">
							Talking at the Awwwards Conference in Amsterdam about Esperanto
							and Side projects in general. Am I a Youtuber now?
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex justify-between gap-5 py-20 border-t border-white/20">
						<div className="flex flex-col gap-3">
							<h1 className="text-[18px] uppercase font-silkaBold font-medium text-white leading-tight tracking-tight">
								Content, Concept & Design
							</h1>
							<h1 className="text-[18px] font-silkaRegular font-medium text-white leading-tight tracking-tight">
								Robin Noguier
							</h1>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-[18px] uppercase font-silkaBold font-medium text-white leading-tight tracking-tight">
								Development & 3D
							</h1>
							<h1 className="text-[18px] font-silkaRegular font-medium text-white leading-tight tracking-tight underline">
								Julien Renau
							</h1>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-[18px] uppercase font-silkaBold font-medium text-white leading-tight tracking-tight">
								Awards
							</h1>
							<h1 className="text-[18px] font-silkaRegular font-medium text-white leading-tight tracking-tight">
								Awwwards - Site of The Day
							</h1>
							<h1 className="text-[18px] font-silkaRegular font-medium text-white leading-tight tracking-tight">
								FWA - Site of The Day
							</h1>
							<h1 className="text-[18px] font-silkaRegular font-medium text-white leading-tight tracking-tight">
								CSSDA - Site of The Day
							</h1>
						</div>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex flex-col">
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							Let&apos;s work together!
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Enjoyed the journey?"
					para="Hit me up at noguier.robin@gmail.com and let's embark on a new design adventure together!"
				/>
				<Link
					className="w-full flex items-center mt-20 justify-center py-3 cursor-pointer"
					href="/project/blurr">
					<p className="text-[14px] font-silkaRegular text-white leading-tight font-medium tracking-wide">
						Keep scrolling or click to go to my next project
					</p>
				</Link>
			</div>
			<div
				className="w-full h-screen flex items-center justify-center gap-5 bg-[#C2375A] relative padding-x overflow-hidden"
				ref={container}>
				<motion.div
					className="h-[5px] w-full bg-[#D2D2D2] absolute top-0 left-0"
					style={{ width: ww }}
				/>
				<div className="w-full flex items-end relative z-20">
					<div className="absolute left-0 translate-y-1/2">
						<h1 className="leading-[1] text-[#D2D2D2] tracking-wide text-[250px] font-ekselldisplayLarge font-bold">
							Blurr
						</h1>
					</div>
				</div>
				<div className="w-full cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/4">
					<Link href="/project/blurr">
						<motion.img
							src="/project-3.avif"
							alt="project-img"
							className="w-[50%] object-cover -rotate-6"
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
