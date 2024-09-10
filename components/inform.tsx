import { TinformProps } from "@/types";

export default function Inform({ title, para, className }: TinformProps) {
	return (
		<div className="w-full flex justify-center py-14">
			<div className="w-[70%] flex gap-10 justify-between">
				<h1
					className={`w-[40%] text-[22px] font-silkaBold font-bold leading-tight tracking-wide ${className}`}>
					{title}
				</h1>
				<p
					className={`w-[60%] text-[20px] font-silkaRegular leading-normal font-medium tracking-wide ${className}`}>
					{para}
				</p>
			</div>
		</div>
	);
}
