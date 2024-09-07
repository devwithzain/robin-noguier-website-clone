import Link from "next/link";
import Image from "next/image";
import { awwwards, CSS, fwa, webbys } from "@/public";

export default function Awards() {
	return (
		<div className="w-full flex items-center justify-center py-20 flex-col gap-20">
			<div className="w-[60%] flex justify-between gap-5 items-center border-b border-white/10 pb-20">
				<div className="w-[40%">
					<Image
						src={fwa}
						alt="fwaImg"
					/>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							site of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							fwa of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							fwa of the day
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Portfolio 2020
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Esperanto
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Elena Iv-Skaya
						</p>
					</div>
				</div>
			</div>
			<div className="w-[60%] flex justify-between gap-5 items-center border-b border-white/10 pb-20">
				<div className="w-[40%">
					<Image
						src={awwwards}
						alt="fwaImg"
					/>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							site of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							site of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							Independent 2019 Nominee
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							fwa site of the day
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Portfolio 2020
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Esperanto
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Freelance
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Elena Iv-Skaya
						</p>
					</div>
				</div>
			</div>
			<div className="w-[60%] flex justify-between gap-5 items-center border-b border-white/10 pb-20">
				<div className="w-[40%">
					<Image
						src={CSS}
						alt="fwaImg"
					/>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							Independent 2019 Nominee
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							website of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							website of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							website of the day
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							website of the day
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Freelance
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Esperanto
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Elena Iv-Skaya
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Eagle Films
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Portfolio 2015
						</p>
					</div>
				</div>
			</div>
			<div className="w-[60%] flex justify-between gap-5 items-center border-b border-white/10 pb-20">
				<div className="w-[40%">
					<h1 className="text-[24px] capitalize font-silkaBold font-medium text-[#CFCFCF]">
						NetAwards
					</h1>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							Portfolio Shortlist
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Portfolio 2015
						</p>
					</div>
				</div>
			</div>
			<div className="w-[60%] flex justify-between gap-5 items-center border-b border-white/10 pb-20">
				<div className="w-[40%">
					<h1 className="text-[24px] capitalize font-silkaBold font-medium text-[#CFCFCF]">
						Commarts
					</h1>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							WebPicks
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Elena Iv-Skaya
						</p>
					</div>
				</div>
			</div>
			<div className="w-[60%] flex justify-between gap-5 items-center pb-20">
				<div className="w-[40%">
					<Image
						src={webbys}
						alt="fwaImg"
					/>
				</div>
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-col gap-3">
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							People&apos;s voice winner
						</Link>
						<Link
							href={"/"}
							className="text-[20px] capitalize font-silkaRegular font-medium underline text-[#CFCFCF]">
							Nominee
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Lonely Planet
						</p>
						<p className="text-[20px] capitalize font-silkaRegular font-medium text-[#CFCFCF]">
							Ueno.co
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
