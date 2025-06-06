import LinkCard from "./LinkCard";

const links = [
	{
		url: "https://www.frontendmentor.io",
		shortenedUrl: "https://rel.ink/k4Kyk",
	},
	{
		url: "https://www.frontendmentor.io",
		shortenedUrl: "https://rel.ink/k4Kyk",
	},
	{
		url: "https://www.frontendmentor.io",
		shortenedUrl: "https://rel.ink/k4Kyk",
	},
];

const ShortenedLinks = () => {
	return (
		<div className="mt-[24px] flex flex-col gap-[24px]">
			{links.map((link, index) => {
				return (
					<LinkCard
						url={link.url}
						shortened={link.shortenedUrl}
					/>
				);
			})}
		</div>
	);
};

export default ShortenedLinks;
