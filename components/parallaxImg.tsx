import Image, { StaticImageData } from "next/image";

export default function ParallaxImg({ src }: { src: StaticImageData }) {
	return (
		<div className="w-full relative overflow-hidden">
			<div
				className="w-full"
				data-scroll
				data-scroll-speed="-.1">
				<Image
					src={src}
					alt="img"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
