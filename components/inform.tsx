import { TinformProps } from "@/types";

export default function Inform({ title, para }: TinformProps) {
	return (
		<div className="w-full flex justify-center padding-x py-20">
			<div className="w-[80%] flex gap-3 justify-between">
				<h1 className="w-1/2 text-[22px] font-silkaBold font-bold text-black leading-tight tracking-wide">
					{title}
				</h1>
				<p className="w-1/2 text-[20px] font-silkaRegular text-black leading-normal font-medium tracking-wide">
					{para}
				</p>
			</div>
		</div>
	);
}
