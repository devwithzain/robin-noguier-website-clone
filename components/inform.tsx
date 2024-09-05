import { TinformProps } from "@/types";

export default function Inform({ title, para, className }: TinformProps) {
	return (
		<div className="w-full flex justify-center padding-x py-20">
			<div className="w-[80%] flex gap-3 justify-between">
				<h1
					className={`w-1/2 text-[22px] font-silkaBold font-bold leading-tight tracking-wide ${className}`}>
					{title}
				</h1>
				<p
					className={`w-1/2 text-[20px] font-silkaRegular leading-normal font-medium tracking-wide ${className}`}>
					{para}
				</p>
			</div>
		</div>
	);
}
