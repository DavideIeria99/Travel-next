import React, { useState } from "react";
// import { createPortal } from "react-dom";

interface modal {
	value: boolean;
}
// const Backdrop = (props: modal) => {
// 	return (
// 		<div
// 			className="fixed top-0 left-0 w-full h-screen z-40 bg-black/75"
// 			onClick={() => props.closeModal}></div>
// 	);
// };
// const Overlay = (props: modal) => {
// 	return (
// 		<div className="fixed top-[30vh] left-[10%] w-10/12 z-50 overflow-hidden border border-cyan-200 p-[40px] backdrop-blur	">
// 			<div className="text-center">
// 				<h2>Prova</h2>
// 			</div>
// 			<p className="my-5">per vedere se funziona</p>
// 			<div className="mt-5 flex justify-between">
// 				<button
// 					className="bg-blue-400 p-2 m-2 rounded hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200 duration-300"
// 					onClick={() => props.closeModal}>
// 					esci
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
export default function Modal(props: modal) {
	const [modal, setModal] = useState(props.value);
	return (
		<>
			{modal && (
				<dialog
					className="fixed top-0 left-0 w-full h-screen z-40 bg-black/75"
					onClick={() => setModal(false)}>
					<div className="fixed top-[30vh] left-[10%] w-10/12 z-50 overflow-hidden border border-cyan-200 p-[40px] backdrop-blur	">
						<div className="text-center">
							<h2>Prova</h2>
						</div>
						<p className="my-5">per vedere se funziona</p>
						<div className="mt-5 flex justify-between">
							<button
								className="bg-blue-400 p-2 m-2 rounded hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-200 duration-300"
								onClick={() => setModal(false)}>
								esci
							</button>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
	// const modalBackdrop: DocumentFragment | HTMLElement | null =
	// 	document.getElementById("backdrop");
	// const modalOverlay: DocumentFragment | HTMLElement | null =
	// 	document.getElementById("overlay");
	// return (
	// 	<>
	// 		{modalBackdrop !== null &&
	// 			createPortal(<Backdrop closeModal={props.closeModal} />, modalBackdrop)}
	// 		{modalOverlay !== null &&
	// 			createPortal(<Overlay {...props} />, modalOverlay)}
	// 	</>
	// );
}
