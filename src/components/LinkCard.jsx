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
		<div className="h-[155px] w-full rounded-[5px] bg-white pt-[6px] pb-[16px] md:flex md:h-[72px] items-center justify-between gap-[24px] md:px-[24px] md:py-[16px]">
			<div className="md:w-[calc(100%-103px)] md:flex md:justify-between">
				<p className="font-[500] text-[16px] leading-[36px] text-myPurple1 tracking-[0.12px] px-[16px] truncate w-80 md:p-0 lg:w-[547px]">
					{url}
				</p>
				<p className="h-[1px] w-full bg-myGray1 opacity-[0.25] mt-[6px] md:hidden"></p>
				<p className="font-[500] text-[16px] leading-[36px] text-myCyan tracking-[0.12px] px-[16px] pb-[6px] md:p-0 ">
					{shortened}
				</p>
			</div>
			<button
				className={`${
					copied ? "bg-myPurple2" : "bg-myCyan"
				} rounded-[5px] w-[calc(100%-32px)] h-[40px] mx-[16px] font-bold leading-[24px] text-white transition-all md:w-[103px] md:m-0`}
				onClick={handleCopy}
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};

export default LinkCard;
