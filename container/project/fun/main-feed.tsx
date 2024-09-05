import Link from "next/link";
import Image from "next/image";
import { Inform, Video } from "@/components";
import { protopieLogo, take1, take2, take3, take4 } from "@/public";

export default function MainFeed() {
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
						title="💖 Liking is hoping 🤞"
						para="We If you liked a person you see a 💖, and it becomes a 🤞finger
							crossed to show that you are hoping that this like becomes a
							match. The 3D rotation is to show that you are passing on the
							people you didn't like."
					/>
				</div>
			</div>
			<Video
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
				videoSrc="/firstExp.mp4"
				text="Onboarding on user's first experience"
			/>
			<Inform
				title="Nope, you can’t go back! ❌"
				para="Instead of just disabling the scroll when trying to go back up, I
						decided to take that opportunity to ask users to share the app to go
						back which will bring us new users."
			/>
			<Video
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
				title="Visually represent that people are close to you 📍"
				para="We wanted to show that Fun is for people NEAR you. On Fun, everyone
						chooses an emoji that represents them called Funmoji. I created this
						animation with the Funmoji of people around you to visually
						represent that there are nearby."
			/>
			<Video
				videoSrc="/visually.mp4"
				text="Each funmoji represent one user near you"
			/>
			<Inform
				title="Custom in-app notifications"
				para="I wanted to create a way to get notifications while not being
						interrupted. Here the notifications appear, you can tap on them but
						if you don't, they seamlessly go away. Fun right?"
			/>
			<Video
				videoSrc="/customNotification.mp4"
				text="In-app notifications for likes 💖 and chats 💬"
			/>
		</>
	);
}
