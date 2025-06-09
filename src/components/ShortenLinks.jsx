import { useContext, useRef } from "react";
import ShortenLinksContext from "../store/ShortenLinksContext";

const ShortenLinks = ({ showError, setShowError }) => {
	const inputRef = useRef();

	const { shortenLink, setRawUrl } = useContext(ShortenLinksContext);

	function handleSubmit(e) {
		e.preventDefault();

		const inputLink = inputRef.current.value.trim();

		if (inputLink === "") {
			setShowError(true);
			return;
		} else {
			setShowError(false);
			setRawUrl(inputLink);
		}
	}
	return (
		<form
			onSubmit={handleSubmit}
			action=""
			className={`${
				showError ? "h-[182px] top-[-91px] " : "h-[160px] top-[-80px] "
			} absolute left-0 w-full p-[24px] bg-myPurple2 rounded-[10px] flex flex-col justify-between transition-all `}
		>
			<div>
				<input
					ref={inputRef}
					className={`rounded-[5px] bg-white font-[500] text-[16px] leading-[36px] tracking-[0.12px] text-myPurple1 text-opacity-[0.5] placeholder:text-opacity-[0.5] h-[48px] w-full px-[16px]  outline-none ${
						showError ? "border-[3px] border-myRed placeholder:text-myRed" : ""
					} `}
					type="text"
					name="link"
					id="link"
					placeholder="Shorten a link here"
					autoComplete="off"
				/>
				<p
					className={`italic text-[12px] font-[500] leading-[18px] text-myRed tracking-[0.08] ${
						showError ? "visible" : "hidden"
					} `}
				>
					Please add a link
				</p>
			</div>
			<button className="rounded-[5px] bg-myCyan h-[48px] w-full font-bold leading-[27px] text-[18px] text-white ">
				Shorten It!
			</button>
		</form>
	);
};

export default ShortenLinks;
