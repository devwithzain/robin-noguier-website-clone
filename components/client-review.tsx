import Image from "next/image";
import { TclienReviewProps } from "@/types";

export default function ClientReview({
	img,
	para,
	title,
	position,
	className,
}: TclienReviewProps) {
	return (
		<div
			className={`w-full flex items-center justify-center py-20 ${className}`}>
			<div className="w-[70%] flex flex-col gap-10">
				<div className="flex items-center gap-10">
					<div>
						<Image
							src={img}
							alt="client-review-img"
							width={80}
							height={80}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="text-[18px] leading-tight tracking-wider font-silkaBold font-medium text-white">
							{title}
						</h1>
						<p className="text-[16px] leading-tight tracking-wider font-silkaRegular font-medium text-white">
							{position}
						</p>
					</div>
				</div>
				<div>
					<p className="text-[28px] leading-loose tracking-wider font-silkaRegular font-medium text-white">
						{para}
					</p>
				</div>
			</div>
		</div>
	);
}
