import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className + " bg-blue-200 "}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
