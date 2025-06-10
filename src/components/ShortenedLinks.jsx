import { useContext } from "react";
import LinkCard from "./LinkCard";
import ShortenLinksContext from "../store/ShortenLinksContext";

const ShortenedLinks = ({ links }) => {
	const { linksData } = useContext(ShortenLinksContext);
	return (
		<div className="mt-[24px] flex flex-col gap-[24px]">
			{linksData.map((link, index) => {
				if (index < 3) {
					return (
						<LinkCard
							key={link.id}
							url={link.rawUrl}
							shortened={link.shortenedLink}
						/>
					);
				}
			})}
		</div>
	);
};

export default ShortenedLinks;
