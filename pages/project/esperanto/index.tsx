"use client";
import { useEffect } from "react";
import { AboutEsperanto, HeroEsperanto, MainFeedEsperanto } from "@/container";

export default function Esperanto() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<HeroEsperanto />
			<AboutEsperanto />
			<MainFeedEsperanto />
		</>
	);
}
