import Image from "next/image";
import { motion } from "framer-motion";
import { partnerClient } from "@/constants";

export default function PartnerClient() {
	return (
		<div className="w-full py-20 flex items-center justify-center">
			<div className="w-[90%] flex gap-10 flex-wrap justify-between">
				{partnerClient.map((item) => (
					<motion.div
						whileHover={{ backgroundColor: item.hoverColor }}
						className="w-[400px] h-[250px] flex items-center justify-center rounded-[20px] shrink-0  bg-[#282828] relative overflow-hidden group"
						key={item.id}>
						<Image
							src={item.src}
							alt="partnerImg"
							className="w-full object-cover group-hover:-translate-y-10 transition-all duration-500 ease-in-out"
							width={400}
							height={250}
						/>
						<h1
							className={`absolute -bottom-20  text-white py-7 w-full rounded-b-lg font-silkaRegular text-center text-[16px] group-hover:bottom-0 ease-in-out  transition-all duration-500`}
							style={{ backgroundColor: item.color }}>
							Google Express and more (NDA)
						</h1>
					</motion.div>
				))}
			</div>
		</div>
	);
}
