import { TvideoProps } from "@/types";

export default function Video({ videoSrc, text }: TvideoProps) {
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
				<p className="text-sm font-silkaRegular text-black leading-tight tracking-wide">
					{text}
				</p>
			</div>
		</div>
	);
}
