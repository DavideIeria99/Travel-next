import Image from "next/image";

export default function Loading() {
	return (
		<>
			<div className="w-full h-screen bg-blue-200 relative text-white z-50 flex justify-center items-center ">
				<div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
				<Image
					className=" animate-ping rounded-full h-28 w-28 "
					width={100}
					height={100}
					src={"/media/airplane.png"}
					alt="prova"
				/>
			</div>
		</>
	);
}
