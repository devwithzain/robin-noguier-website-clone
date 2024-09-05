"use client";
import { useEffect } from "react";
import { AboutFun, HeroFun, MainFeedFun, OnBoardingFun } from "@/container";

export default function Fun() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<HeroFun />
			<AboutFun />
			<OnBoardingFun />
			<MainFeedFun />
		</>
	);
}
