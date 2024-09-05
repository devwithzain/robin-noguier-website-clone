import { StaticImageData } from "next/image";

export type TvideoProps = {
   videoSrc: string;
   className?: string;
   text?: string;
};

export type TinformProps = {
   title: string;
   para: string;
   className: string;
};

export type TclienReviewProps = {
   title: string;
   para: string;
   position: string;
   className: string;
   img: StaticImageData;
};