import { getArticleCity, getCity } from "@/app/actions";
import { Article, City } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
	params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// read route params
	const id = params.slug;
	// fetch data
	const city: City | null = await getCity(parseInt(id));
	if (city) {
		return {
			title: city.name,
		};
	}
	return {
		title: "travel next",
	};
}

export default async function details({ params }: Props) {
	const city: City | null = await getCity(parseInt(params.slug));
	const article: Article[] | null = await getArticleCity(parseInt(params.slug));

	const popolate = (num: number) => {
		const numberToArray = num.toString().split("").reverse();
		const array = [];
		for (let i = 0; i < numberToArray.length; i++) {
			if ((i + 1) % 3 === 0) {
				array.push(numberToArray[i]);
				array.push(" ");
			} else {
				array.push(numberToArray[i]);
			}
		}
		const arrayInverse = array.reverse().join("");
		return arrayInverse;
	};

	console.log(city);

	return (
		<>
			<section className="flex justify-between mt-24 p-5">
				{city && (
					<>
						<Image
							width={500}
							height={500}
							alt={city.name}
							src={city.image}
						/>
						<div className="w-1/2">
							<h2>{city.name}</h2>
							<p>{city.description}</p>
							<ul>
								<li>Altitudine: {city.altitude}m s.l.m</li>
								<li>Area: {parseFloat(city.area.toString())} km^2 </li>
								<li>
									Popolazione: {popolate(city.population)} , ({city.year})
								</li>
							</ul>
						</div>
					</>
				)}
			</section>
			<section className="p-4 gap-3">
				{article &&
					article.map((el) => (
						<section key={el.id}>
							<h3>{el.title}</h3>
							<p>{el.description}</p>
						</section>
					))}
			</section>
		</>
	);
}
