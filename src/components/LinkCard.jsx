const LinkCard = ({ url, shortened }) => {
	return (
		<div className="h-[155px] w-full rounded-[5px] bg-white pt-[6px] pb-[16px] ">
			<p className="font-[500] text-[16px] leading-[36px] text-myPurple1 tracking-[0.12px] px-[16px]  ">
				{url}
			</p>
			<p className="h-[1px] w-full bg-myGray1 opacity-[0.25] mt-[6px] "></p>
			<p className="font-[500] text-[16px] leading-[36px] text-myCyan tracking-[0.12px] px-[16px] pb-[6px] ">
				{shortened}
			</p>
			<button className="bg-myCyan rounded-[5px] w-[calc(100%-32px)] h-[40px] mx-[16px] font-bold leading-[24px] text-white ">
				Copy
			</button>
		</div>
	);
};

export default LinkCard;
