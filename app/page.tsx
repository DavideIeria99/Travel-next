import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import Text from "@/components/Text/Text";
import { headerType } from "@/type/type";

export default function Home() {
	const header: headerType = {
		name: "Travel Next",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum.",
	};
	return (
		<>
			<Header
				header={header}
				animate="animate__fadeIn"
			/>
			<Text />
		</>
	);
}
