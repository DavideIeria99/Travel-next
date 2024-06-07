"use client";

import { headerType } from "@/type/type";

interface headerProps {
	header: headerType;
	animate?: string;
}
export default function Header({ header, animate }: headerProps) {
	return (
		<header
			className={`h-screen bg-[url('/media/header.jpg')]  bg-cover bg-center bg-no-repeat  w-full  flex justify-center items-center `}>
			<div
				className={
					"text-center bg-blue-400/50 text-white p-3 rounded w-1/3 animate__animated " +
					animate
				}>
				<h1>{header.name}</h1>
				<p className="text-balance">{header.text}</p>
			</div>
		</header>
	);
}
