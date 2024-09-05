"use client";
import Link from "next/link";
import Image from "next/image";
import { ClientReview, Inform, Video } from "@/components";
import {
	chat,
	client1,
	client2,
	fun1,
	fun2,
	fun3,
	fun4,
	fun5,
	fun6,
	inbox,
	protopieLogo,
	protopieLogoBlack,
	signupFlow1,
	signupFlow2,
	signupFlow3,
	take1,
	take2,
	take3,
	take4,
} from "@/public";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MainFeed() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const ww = useTransform(scrollYProgress, [0, 1], [0, 4500]);

	return (
		<>
			<div className="w-full flex items-center justify-center py-20 padding-x">
				<div className="w-full flex flex-col gap-20">
					<div className="w-full flex items-center justify-center">
						<div className="w-[75%] flex flex-col gap-5">
							<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
								02
							</h1>
							<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
								Main Feed
							</h1>
						</div>
					</div>
					<Inform
						className="text-black"
						title="4 profiles grid"
						para="We decided to start with a 4 profiles grid to let users only open
							profiles they are interested in and remove the guilt of passing on
							people. It also allowed us to be different from that usual
							one-card feed."
					/>
					<div className="w-full flex items-center justify-center">
						<video
							muted
							autoPlay
							loop
							src="/mainFeed.mp4"
							className="rounded-[50px] object-cover w-[400px] h-auto"
						/>
					</div>
					<Inform
						className="text-black"
						title="💖 Liking is hoping 🤞"
						para="We If you liked a person you see a 💖, and it becomes a 🤞finger
							crossed to show that you are hoping that this like becomes a
							match. The 3D rotation is to show that you are passing on the
							people you didn't like."
					/>
				</div>
			</div>
			<Video
				className="text-black"
				videoSrc="/liking.mp4"
				text="💖 ⇨ 🤞"
			/>
			<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
				<Image
					src={protopieLogo}
					alt="protopie"
					width={300}
					height={300}
				/>
				<Link
					href="/"
					className="text-sm font-silkaRegular text-black leading-normal font-bold tracking-tight">
					⚡⚡⚡ Try Prototype ⚡⚡⚡
				</Link>
			</div>
			<Inform
				className="text-black"
				title="Teach the game!"
				para="	A few key principles were crucial to explain well on the first
						experience."
			/>
			<div className="w-full flex flex-col py-20 gap-10 padding-x">
				<div className="w-full flex items-center justify-between gap-5">
					{[take1, take2, take3, take4].map((image, index) => (
						<Image
							key={index}
							src={image}
							alt="take1Image"
							className="rounded-[50px] w-[400px]"
						/>
					))}
				</div>
				<div className="w-full flex items-center justify-center">
					<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide">
						Steps from onboarding
					</p>
				</div>
			</div>
			<Video
				className="text-black"
				videoSrc="/firstExp.mp4"
				text="Onboarding on user's first experience"
			/>
			<Inform
				className="text-black"
				title="Nope, you can’t go back! ❌"
				para="Instead of just disabling the scroll when trying to go back up, I
						decided to take that opportunity to ask users to share the app to go
						back which will bring us new users."
			/>
			<Video
				className="text-black"
				videoSrc="/share.mp4"
				text="Share to go back 😄"
			/>
			<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
				<Image
					src={protopieLogo}
					alt="protopie"
					width={300}
					height={300}
				/>
				<Link
					href="/"
					className="text-sm font-silkaRegular text-black leading-normal font-bold tracking-tight">
					⚡⚡⚡ Try Prototype ⚡⚡⚡
				</Link>
			</div>
			<Inform
				className="text-black"
				title="Visually represent that people are close to you 📍"
				para="We wanted to show that Fun is for people NEAR you. On Fun, everyone
						chooses an emoji that represents them called Funmoji. I created this
						animation with the Funmoji of people around you to visually
						represent that there are nearby."
			/>
			<Video
				className="text-black"
				videoSrc="/visually.mp4"
				text="Each funmoji represent one user near you"
			/>
			<Inform
				className="text-black"
				title="Custom in-app notifications"
				para="I wanted to create a way to get notifications while not being
						interrupted. Here the notifications appear, you can tap on them but
						if you don't, they seamlessly go away. Fun right?"
			/>
			<Video
				className="text-black"
				videoSrc="/customNotification.mp4"
				text="In-app notifications for likes 💖 and chats 💬"
			/>
			<ClientReview
				className="bg-gradient-to-t from-[#0079FF] to-[#00B9FF] my-20"
				title="Farbood Nivi"
				position="CEO at Fun"
				img={client1}
				para="Robin is an absolute master at his craft. He generates world-class work at a breakneck pace. I love working with him. I worked with him almost entirely remotely from different continents and the work pace and quality were second to none. Can't wait to work together again."
			/>
			<div className="w-full flex items-center justify-center">
				<div className="w-[75%] flex flex-col gap-5">
					<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
						03
					</h1>
					<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
						Profile
					</h1>
				</div>
			</div>
			<Inform
				className="text-black"
				title="Full-screen profile"
				para="Profiles can have up to 3 videos, a bio, and a funmoji (an emoji that represent you)."
			/>
			<Video
				className="text-black"
				videoSrc="/profile1.mp4"
				text="Profile videos"
			/>
			<Inform
				className="text-black"
				title="Picture in Picture Profile"
				para="Wanna read more about a person you fancy while seeing her/his/them cute face? 😚 Here is a prototype of a profile that was made to solve that exact problem!"
			/>
			<Video
				className="text-black"
				videoSrc="/profile2.mp4"
				text="Picture in Picture Profile"
			/>
			<Inform
				className="text-black"
				title="Emoji Twins 🥳 🥳"
				para="If out of the 3,633 emojies, you both chose the same one to represent you then you found your Emoji Twin!"
			/>
			<Video
				className="text-black"
				videoSrc="/profile4.mp4"
				text="Celebrating your emoji twin 🐵 🐵 🐵"
			/>
			<Inform
				className="text-black"
				title="Introducing the funwheel 🎰"
				para="We created the funwheel to have richer reactions than just sending a like. We added a morphing loop 💖 to 💬 just enough time for the person to get excited while waiting to see if it'll be a match."
			/>
			<Video
				className="text-black"
				videoSrc="/profile3.mp4"
				text="💖 Like animation"
			/>
			<Video
				className="text-black"
				videoSrc="/profile5.mp4"
				text="💬 🥳 Match animation 🥳"
			/>
			<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
				<Image
					src={protopieLogo}
					alt="protopie"
					width={300}
					height={300}
				/>
				<Link
					href="/"
					className="text-sm font-silkaRegular text-black leading-normal font-bold tracking-tight">
					⚡⚡⚡ Try Prototype ⚡⚡⚡
				</Link>
			</div>
			<Inform
				className="text-black"
				title="Let's simplify, only send a 💖"
				para="After some tests, we realized users were spending too much time picking the right emoji which led to fewer likes sent. That's why we went back to the like-only reaction."
			/>
			<div className="w-full flex flex-col items-center justify-center">
				<video
					muted
					autoPlay
					loop
					src="/likeOnly.mp4"
					className="rounded-[50px] object-cover w-[400px] h-auto"
				/>
				<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide py-5">
					Like only animation 💖
				</p>
			</div>
			<Inform
				className="text-black"
				title="Never miss a chance to be Fun!"
				para="The first video is the spotlight, the user will appear in the feed with borders and his funmoji jumping around. The second video is when there is no one else around. The third video shows why is it important to enable notifications."
			/>
			<div className="w-full flex flex-col items-center justify-center py-20 gap-5 padding-x">
				<div className="w-[75%] flex items-center justify-between gap-5">
					<video
						muted
						autoPlay
						loop
						src="/spotlight.mp4"
						className="rounded-[50px] object-cover w-[400px] h-auto"
					/>
					<video
						muted
						autoPlay
						loop
						src="/noMore.mp4"
						className="rounded-[50px] object-cover w-[400px] h-auto"
					/>
					<video
						muted
						autoPlay
						loop
						src="/enables.mp4"
						className="rounded-[50px] object-cover w-[400px] h-auto"
					/>
				</div>
				<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide py-5">
					1- Spotlight / 2-No more people / 3-Enable Notification
				</p>
			</div>
			<ClientReview
				className="bg-gradient-to-t from-[#B45DFF] to-[#7FA2FF] my-20"
				title="Brian Norgard"
				position="Ex-CPO at Tinder"
				img={client2}
				para="I’ve worked with hundreds of designers in my career and Robin is at the top. I admire him."
			/>
			<div className="w-full flex items-center justify-center">
				<div className="w-[75%] flex flex-col gap-5">
					<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
						04
					</h1>
					<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
						Swiping Cards
					</h1>
				</div>
			</div>
			<Inform
				className="text-black"
				title="Up to 💖, down to ❌"
				para="As much as we liked the Quad Grid, sometimes you need to make it simpler to make the experience as smooth as possible."
			/>
			<Video
				className="text-black"
				videoSrc="/swiping1.mp4"
				text="Up to 💖, down to ❌"
			/>
			<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
				<Image
					src={protopieLogo}
					alt="protopie"
					width={300}
					height={300}
				/>
				<Link
					href="/"
					className="text-sm font-silkaRegular text-black leading-normal font-bold tracking-tight">
					⚡⚡⚡ Try Prototype ⚡⚡⚡
				</Link>
			</div>
			<Inform
				className="text-black"
				title="Right 💖, Left to ❌"
				para="Dating app users are already used to the left and right swiping mechanism so we explored a way to implement this."
			/>
			<Video
				className="text-black"
				videoSrc="/swiping2.mp4"
				text="Left / right swipe directions"
			/>
			<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
				<Image
					src={protopieLogo}
					alt="protopie"
					width={300}
					height={300}
				/>
				<Link
					href="/"
					className="text-sm font-silkaRegular text-black leading-normal font-bold tracking-tight">
					⚡⚡⚡ Try Prototype ⚡⚡⚡
				</Link>
			</div>
			<Inform
				className="text-black"
				title="Vertical scroll"
				para="We also explored a profile that we could scroll vertically to have more info. You would still swipe right/left to like/pass."
			/>
			<Video
				className="text-black"
				videoSrc="/swiping3.mp4"
				text="Profile vertical scroll"
			/>
			<div className="w-full flex items-center justify-center mt-20">
				<div className="w-[75%] flex flex-col gap-5">
					<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
						05
					</h1>
					<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
						Time to chat 💬
					</h1>
				</div>
			</div>
			<Inform
				className="text-black"
				title="The reason we're all here for: chat! 💬"
				para="All the good stuff and more! For example, we implemented a harassment blocker: after 3 messages are sent without an answer, you can't send another one before the person replies (Screen 3)"
			/>
			<div className="w-full flex flex-col items-center justify-center py-20 gap-5 padding-x">
				<div className="w-[75%] flex items-center justify-between gap-5">
					<Image
						src={inbox}
						alt="inbox-img"
						width={300}
						height={300}
						className="rounded-[50px] object-cover w-[400px] h-auto border-black/10 border"
					/>
					<video
						muted
						autoPlay
						loop
						src="/typing.mp4"
						className="rounded-[50px] object-cover w-[400px] h-auto border-black/10 border"
					/>
					<Image
						src={chat}
						alt="chat-img"
						width={300}
						height={300}
						className="rounded-[50px] object-cover w-[400px] h-auto border-black/10 border"
					/>
				</div>
				<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide py-5">
					Inbox / Typing / Chat blocked after 3 messages
				</p>
			</div>
			<ClientReview
				className="bg-black mt-20"
				title="Brian Norgard"
				position="Ex-CPO at Tinder"
				img={client2}
				para='"NEVER EVER lose your openness to explore new ideas. You are nailing so many aspects of what it takes to build a great product. I consider it an honor to work with you" (Via Text)'
			/>
			<div className="w-full bg-black padding-x">
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex flex-col gap-5">
						<h1 className="text-[18px] font-silkaBold font-bold text-white leading-tight tracking-wide uppercase">
							06
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							Discover who liked you
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Like directly from your likes me"
					para="Love at first sight? Thanks but no thanks? You can directly like
							or pass someone from the grid view, without having to go to the
							full-view profile."
				/>
				<Video
					className="text-white"
					videoSrc="/likeFromInbox.mp4"
					text="Like from the Inbox"
				/>
				<div className="w-full flex flex-col gap-5 items-center justify-center py-20">
					<Image
						src={protopieLogoBlack}
						alt="protopieLogoBlackImg"
						width={300}
						height={300}
					/>
					<Link
						href="/"
						className="text-sm font-silkaRegular text-white leading-normal font-bold tracking-tight">
						⚡⚡⚡ Try Prototype ⚡⚡⚡
					</Link>
				</div>
				<Inform
					className="text-white"
					title="Tap instead of a gesture"
					para="Gestures are harder to teach to a new user so we explored a version where you would just tap the icons to like or pass."
				/>
				<Video
					className="text-white"
					videoSrc="/tapToLike.mp4"
					text="Tap to like or pass"
				/>
				<div className="py-40">
					<Video
						className="text-white"
						videoSrc="/movingVideo.mp4"
					/>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex flex-col gap-5">
						<h1 className="text-[18px] font-silkaBold font-bold text-white leading-tight tracking-wide uppercase">
							07
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							Sign up
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Get only the info you really need."
					para="To reduce the number of users dropping while signing up, we asked for the bare minimum of information and showed a progress bar to encourage users to finish the sign up flow."
				/>
				<div className="w-full flex items-center justify-center flex-col py-20 gap-10 padding-x">
					<div className="w-[80%] flex items-center justify-between gap-5">
						{[signupFlow1, signupFlow2, signupFlow3].map((image, index) => (
							<Image
								key={index}
								src={image}
								alt="signupFlowImage"
								className="rounded-[50px] w-[450px]"
							/>
						))}
					</div>
					<div className="w-full flex items-center justify-center">
						<p className="text-sm font-silkaRegular text-white leading-tight tracking-wide">
							Sign up flow
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-[70%] flex flex-col gap-5">
						<h1 className="text-[18px] font-silkaBold font-bold text-white leading-tight tracking-wide uppercase">
							08
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							What did I learn?
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Different gender = different experience"
					para="To reduce the number of users dropping while signing up, we asked for the bare minimum of information and showed a progress bar to encourage users to finish the sign up flow."
				/>
				<Inform
					className="text-white"
					title="User acquisition is key, even more for dating apps"
					para="No one wants to use a dating app with nobody on it. User acquisition is really key and that's why we designed a few things to try to acquire new users from the start. (Example: Generating a video you can share on other social networks)"
				/>
				<div className="w-full flex items-center justify-center">
					<video
						muted
						autoPlay
						loop
						src="/download.mp4"
						className="rounded-[50px] object-cover w-[400px] h-auto"
					/>
				</div>
				<Inform
					className="text-white"
					title="Choose carefully where to innovate"
					para="Coming up with a fancy new way of doing something is only valuable if it's core to your business (ex: Tinder Swipes). Do not complicate things for the sake of being 'innovative'."
				/>
				<Inform
					className="text-white"
					title="Launch Parties are fun! 🥳"
					para="The Fun team flew me to Los Angeles for the launch party. It was an amazing opportunity to celebrate months of hard/fun work and get to know each other better. Also got to meet some of our investors including Paris Hilton and her husband Carter Reum, founder of the M13 venture firm."
				/>
				<div className="w-full flex flex-col items-center justify-center gap-10">
					<div className="w-[95%] flex items-center justify-between gap-5">
						<Image
							src={fun1}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>
						<video
							muted
							autoPlay
							loop
							src="/fun7.mp4"
							className="object-cover w-[450px] h-auto"
						/>
						<Image
							src={fun2}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>
						<Image
							src={fun3}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>
					</div>
					<div className="w-[95%] flex items-center justify-between gap-5">
						<Image
							src={fun4}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>

						<Image
							src={fun5}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>
						<video
							muted
							autoPlay
							loop
							src="/fun8.mp4"
							className="object-cover w-[450px] h-auto"
						/>
						<Image
							src={fun6}
							alt="signupFlowImage"
							className="w-[450px] object-cover"
						/>
					</div>
					<p className="text-[16px] font-silkaRegular text-white leading-tight tracking-wide">
						Some good moments in Los Angeles 🏝 (Featuring Paris Hilton, Carteur
						Reum, Farb Nivi & Brian Norgard)
					</p>
				</div>
				<div className="w-full flex items-center justify-center mt-48">
					<div className="w-[70%] flex flex-col gap-5">
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-white leading-tight tracking-tight">
							Let&apos;s work together!
						</h1>
					</div>
				</div>
				<Inform
					className="text-white"
					title="Do we have a crush on each other? 💖💖"
					para="Reach out at noguier.robin@gmail.com. I have an inbox zero rule so I’ll see your message for sure and, I’ll reply with at least one smiley"
				/>
			</div>
			<div
				className="w-full h-screen flex items-center justify-center gap-5 bg-[#F5F8FF] relative padding-x overflow-hidden"
				ref={container}>
				<motion.div
					className="h-2 w-full bg-red-500 absolute top-0 left-0"
					style={{ width: ww }}
				/>
				<div className="w-full flex items-end relative z-20">
					<div className="absolute left-0 translate-y-1/2">
						<h1 className="leading-[1] text-[#FE3448] tracking-wide text-[250px] font-ekselldisplayLarge font-bold">
							Exprento
						</h1>
					</div>
				</div>
				<div className="w-full flex items-center justify-center cursor-pointer absolute">
					<Link href="/project/exprento">
						<motion.img
							src="/project-2.avif"
							alt="project-img"
							className="w-[90%] object-cover -rotate-6"
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
