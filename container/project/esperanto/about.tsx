import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
	return (
		<div className="w-full min-h-screen bg-white z-50 flex items-center justify-center">
			<div className="w-[70%] h-full flex items-center justify-center gap-5">
				<div className="w-full flex flex-col gap-16">
					<div className="flex flex-col gap-3">
						<h1 className="text-[18px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
							About the project
						</h1>
						<h1 className="text-[100px] font-ekselldisplaySmall font-medium text-black leading-tight tracking-tight">
							Traveling the world to shine <br /> a light on designers
						</h1>
					</div>
					<div className="w-full flex justify-between items-center">
						<div className="w-[70%]">
							<p className="text-[20px] font-silkaRegular text-black leading-normal font-medium tracking-wide">
								In January 2018, I left my job to travel around the world to
								discover new talents. In every country I visited over the next
								12 months, I arranged to meet, interviewed and photograph one
								person working in the creative field. My goal was to meet
								people, discover talents and design industries that are
								sometimes underrepresented, and show that everyone has an
								interesting story to tell, no matter when they come from. I
								asked them about their story, their process and the industry
								they are working in. I did the transcript of those interviews in
								order to create a website containing all those articles. To
								build a side project, it’s essential to underestimate the amount
								of work required. It took me more than two years to do this
								project and I don’t regret any seconds I put into it. There is a
								lot of countries out there I haven’t been to yet so Esperanto
								will forever be a work in progress.
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
											Design
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Interviews
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Copywriting
										</p>
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Photography
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h1 className="text-[20px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
										Client
									</h1>
									<div className="flex flex-col gap-2">
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											Self-Initiated
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h1 className="text-[20px] font-silkaBold font-bold text-black leading-tight tracking-wide uppercase">
										Date
									</h1>
									<div className="flex flex-col gap-2">
										<p className="text-[18px] font-silkaRegular font-bold text-black/50 leading-tight tracking-wide uppercase">
											2018 - Year Long Project
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link
						className="w-fit flex items-center gap-4 group"
						href="/">
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
