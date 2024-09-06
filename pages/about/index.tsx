"use client";
import { useEffect } from "react";
import { HeroAbout } from "@/container";

export default function AboutPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<HeroAbout />
		</>
	);
}
