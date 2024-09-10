import { TvideoProps } from "@/types";

export default function Video({ videoSrc, text, className }: TvideoProps) {
	return (
		<div className="w-full flex flex-col padding-x">
			<video
				muted
				autoPlay
				loop
				src={videoSrc}
				className="w-full object-contain"
			/>
			<div className="w-full flex items-center justify-center">
				<p
					className={`text-sm font-silkaRegular leading-tight tracking-wide py-5 ${className}`}>
					{text}
				</p>
			</div>
		</div>
	);
}
