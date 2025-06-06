import ShortenedLinks from "./ShortenedLinks";
import ShortenLinks from "./ShortenLinks";
import { useState } from "react";

const AdvancedStats = () => {
	const [showError, setShowError] = useState(false);

	return (
		<section
			className={`pb-40 transition-all bg-myGray2 ${
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
			</div>
		</section>
	);
};

export default AdvancedStats;
