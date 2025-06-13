import { useState } from "react";

const LinkCard = ({ url, shortened }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(shortened);
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		} catch (err) {
			console.error("Copy failed:", err);
		}
	};

	return (
		<div className="h-[155px] w-full rounded-[5px] bg-white pt-[6px] pb-[16px] ">
			<p className="font-[500] text-[16px] leading-[36px] text-myPurple1 tracking-[0.12px] px-[16px] truncate w-80 ">
				{url}
			</p>
			<p className="h-[1px] w-full bg-myGray1 opacity-[0.25] mt-[6px] "></p>
			<p className="font-[500] text-[16px] leading-[36px] text-myCyan tracking-[0.12px] px-[16px] pb-[6px] ">
				{shortened}
			</p>
			<button
				className={`${
					copied ? "bg-myPurple2" : "bg-myCyan"
				} rounded-[5px] w-[calc(100%-32px)] h-[40px] mx-[16px] font-bold leading-[24px] text-white transition-all`}
				onClick={handleCopy}
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};

export default LinkCard;
