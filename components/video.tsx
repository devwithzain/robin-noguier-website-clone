import { TvideoProps } from "@/types";

export default function Video({ videoSrc, text, className }: TvideoProps) {
	return (
		<div className="w-full flex flex-col gap-6 padding-x">
			<video
				muted
				autoPlay
				loop
				src={videoSrc}
				className="w-full object-contain"
			/>
			<div className="w-full flex items-center justify-center">
				<p
					className={`text-sm font-silkaRegular leading-tight tracking-wide ${className}`}>
					{text}
				</p>
			</div>
		</div>
	);
}
