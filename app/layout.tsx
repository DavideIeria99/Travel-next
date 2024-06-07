import type { Metadata } from "next";
import { Inter, Noto_Sans_Old_Italic, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "animate.css";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "TravelNext",
	description: "travel flying",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className + " bg-blue-200 "}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
