import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { prisma } from "@/lib/prisma";
import { headerType } from "@/type/type";
import { City } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};
const cityData = async () => {
	return await prisma.city.findMany();
};
export default async function blog() {
	const header: headerType = {
		name: "Blog",
		text: "articoli ogni giorno",
	};
	const city: City[] = await cityData();

	return (
		<>
			<Header header={header} />
			<h2 className="my-5 ms-2">ultimi articoli</h2>
			<section className="mb-5 ms-2 p-2 grid grid-cols-3 gap-10 overflow-hidden">
				{city.map((el) => (
					<Card
						key={el.id}
						city={el}
					/>
				))}
			</section>
		</>
	);
}
