import ShortenedLinks from "./ShortenedLinks";
import ShortenLinks from "./ShortenLinks";
import { useState } from "react";

import cyanLine from "/public/images/Cyan-line.svg";
import brandIdentity from "/public/images/icon-brand-recognition.svg";
import detailedRecords from "/public/images/icon-detailed-records.svg";
import fullyCustomizable from "/public/images/icon-fully-customizable.svg";

const AdvancedStats = () => {
	const [showError, setShowError] = useState(false);

	return (
		<section
			className={`transition-all bg-myGray2 ${
				showError ? "mt-[91px]" : "mt-[80px]"
			} `}
		>
			<div
				className={`container relative transition-all ${
					showError ? "pt-[91px]" : "pt-[80px]"
				} `}
			>
				<ShortenLinks
					showError={showError}
					setShowError={setShowError}
				/>
				<ShortenedLinks />

				<div className="py-[80px] ">
					<h2 className="font-[700] text-[28px] leading-[48px] text-center tracking-[-0.7px] text-myPurple1 ">
						Advanced Statistics
					</h2>
					<p className="font-[500] text-[16px] leading-[28px] text-center tracking-[0.109] text-myGray1 ">
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
					<div className="h-[1014px] w-full relative mt-[92px] ">
						<img
							className="absolute bottom-0 left-[50%]  z-[0]  "
							src={cyanLine}
							alt="line"
						/>
						<div className="h-full w-full justify-between z-[1000] flex flex-col gap-[92px]">
							<div className="w-full h-[267px] relative pt-[77px] rounded-[5px] bg-white px-[32px] ">
								<div className="w-[88px] h-[88px] absolute left-[50%] translate-x-[-50%] top-[-44px] rounded-[50%] bg-myPurple2 flex items-center justify-center ">
									<img
										src={brandIdentity}
										alt=""
									/>
								</div>
								<h3 className="font-[700] text-[22px] leading-[33px] text-center text-myPurple1 mx-[12px] ">
									Brand Recognition
								</h3>
								<p className="font-[500] text-[15px] leading-[26px] text-center text-myGray1 ">
									Boost your brand recognition with each click. Generic links
									don’t mean a thing. Branded links help instil confidence in
									your content.
								</p>
							</div>
							<div className="w-full h-[267px] relative pt-[77px] rounded-[5px] bg-white px-[32px] ">
								<div className="w-[88px] h-[88px] absolute left-[50%] translate-x-[-50%] top-[-44px] rounded-[50%] bg-myPurple2 flex items-center justify-center ">
									<img
										src={detailedRecords}
										alt=""
									/>
								</div>

								<h3 className="font-[700] text-[22px] leading-[33px] text-center text-myPurple1 mx-[12px] ">
									Detailed Records
								</h3>
								<p className="font-[500] text-[15px] leading-[26px] text-center text-myGray1 ">
									Gain insights into who is clicking your links. Knowing when
									and where people engage with your content helps inform better
									decisions.
								</p>
							</div>
							<div className="w-full h-[267px] relative pt-[77px] rounded-[5px] bg-white px-[32px] ">
								<div className="w-[88px] h-[88px] absolute left-[50%] translate-x-[-50%] top-[-44px] rounded-[50%] bg-myPurple2 flex items-center justify-center ">
									<img
										src={fullyCustomizable}
										alt=""
									/>
								</div>

								<h3 className="font-[700] text-[22px] leading-[33px] text-center text-myPurple1 mx-[12px] ">
									Fully Customizable
								</h3>
								<p className="font-[500] text-[15px] leading-[26px] text-center text-myGray1 ">
									Improve brand awareness and content discoverability through
									customizable links, supercharging audience engagement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdvancedStats;
