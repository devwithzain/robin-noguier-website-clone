import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProjectNavbar() {
	return (
		<div className="w-full h-[7vh] flex items-center justify-between fixed top-0 left-0 padding-x">
			<div>
				<Link
					className="flex items-center gap-4 group leading-tight tracking-wider text-[16px] font-silkaRegular font-bold uppercase text-black cursor-pointer"
					href="/">
					<FaArrowLeftLong
						size={24}
						className="font-normal group-hover:-translate-x-1 duration-300 ease-in-out text-black"
					/>
					back to home
				</Link>
			</div>
			<div>
				<h1 className="text-[16px] leading-tight tracking-widest uppercase font-silkaRegular text-black font-bold">
					about
				</h1>
			</div>
		</div>
	);
}
