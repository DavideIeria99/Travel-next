"use client";

import { City } from "@prisma/client";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import Button from "../Button/Button";

interface cityProps {
	city: City;
}

export default function Card({ city }: cityProps) {
	const [scrollTrigger, isInView] = useInView();

	return (
		<section
			ref={scrollTrigger}
			className={`w-full  border group  bg-white border-slate-200 p-2  rounded shadow-2xl hover:scale-110 duration-300 
				${isInView ? `opacity-1  ` : "opacity-0"}`}>
			<div className="overflow-hidden">
				<Image
					className="bg-cover bg-center "
					width={500}
					height={100}
					alt="image"
					src={city.image}
				/>
			</div>
			<h3>{city.name}</h3>
			<p className="line-clamp-1">{city.description}</p>

			<Button
				label="Details"
				href={`/blog/${city.id}`}
			/>
		</section>
	);
}
