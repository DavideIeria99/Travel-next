"use client";

interface propsButton {
	label?: string;
	type?: string;
	href?: string;
}
export default function Button(props: propsButton) {
	const buttonClass =
		"bg-blue-400 p-1 my-3 mx-2  rounded hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200 duration-300";

	return (
		<a href={props.href}>
			<button
				typeof={props.type ?? "button"}
				className={buttonClass}>
				{props.label ?? "click me"}
			</button>
		</a>
	);
}
