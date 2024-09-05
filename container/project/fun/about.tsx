import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
	return (
		<div className="w-full h-screen bg-white z-50 flex items-center justify-center">
			<div className="w-[70%] h-full flex items-center justify-center gap-5">
				<div className="w-full flex flex-col gap-16">
					<div className="flex flex-col gap-3">
						<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
							About the project
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
							We take fun seriously
						</h1>
					</div>
					<div className="w-full flex justify-between items-center">
						<div className="w-[70%]">
							<p className="text-[20px] font-silkaRegular text-black leading-normal font-medium tracking-wide">
								When Brian Norgard (Ex-CPO at Tinder) and Farb Nivi (Ex-CEO at
								Coinmine) reached out to me, I knew this would be the kind of
								project I take on: challenging, new, and, of course, fun. The
								initial pitch was simple: let's build a video-only dating app
								(Tinder meets TikTok). Our collaboration was nothing like I had
								ever experienced before. They pushed me hard to explore
								uncharted paths that usually led to a better solution to the
								problem we were trying to solve. This remains one of the best
								projects I've been lucky enough to participate in. I've learned
								a lot, experienced a lot, failed a lot, and had some of the best
								product design thinking with Farb and Brian. 10/10 would
								recommend it 😄
							</p>
						</div>
						<div className="w-fit">
							<div className="w-full flex flex-col gap-5">
								<div className="flex flex-col gap-4">
									<h1 className="text-[20px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
										Role
									</h1>
									<div className="flex flex-col gap-2">
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											User Experience
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Visual Design
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Prototyping
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h1 className="text-[20px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
										Client
									</h1>
									<div className="flex flex-col gap-2">
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Brian Norgard
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Farb Nivi
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h1 className="text-[20px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
										Date
									</h1>
									<div className="flex flex-col gap-2">
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											May 2021 - October 2022
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link
						className="w-fit flex items-center gap-4 group"
						href="https://cloud.protopie.io/p/8874a89dd394c045af71d500">
						<p className="leading-tight tracking-wide text-[16px] font-silkaRegular font-bold uppercase">
							try it
						</p>
						<FaArrowRightLong
							size={20}
							className="font-normal group-hover:translate-x-1 duration-300 ease-in-out"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
