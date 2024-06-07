"use client";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Text() {
	return (
		<main className="min-h-screen w-full relative z-10">
			<Modal value={true} />
			{/* @note section 3 card */}
			<section className="flex justify-around gap-10 p-8 my-5">
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					nobis et consequuntur aspernatur quasi amet, officia blanditiis
					tempora quas rerum?
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					nobis et consequuntur aspernatur quasi amet, officia blanditiis
					tempora quas rerum?
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					nobis et consequuntur aspernatur quasi amet, officia blanditiis
					tempora quas rerum?
				</div>
			</section>
			{/* @note section text image */}
			<section className="flex justify-between p-10">
				<div className="w-1/3 bg-[url('/media/amsterdam.jpg')] bg-cover bg-center" />

				<div className="w-1/2 ">
					<h2>Lorem ipsum dolor sit amet.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est
						impedit recusandae quam eveniet aut veritatis, iure perferendis.
						Quidem expedita veniam nemo voluptatum. Vero ad quam officiis
						blanditiis, consequuntur aspernatur.
					</p>
					<Button href="/blog" />
				</div>
			</section>
			<section className="flex justify-between p-10">
				<div className="w-1/2 ">
					<h2>Lorem ipsum dolor sit amet.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est
						impedit recusandae quam eveniet aut veritatis, iure perferendis.
						Quidem expedita veniam nemo voluptatum. Vero ad quam officiis
						blanditiis, consequuntur aspernatur.
					</p>
					<Button href="/blog" />
				</div>
				<div className="w-1/3 bg-[url('/media/Firenze.jpg')] bg-cover bg-center" />
			</section>
		</main>
	);
}
