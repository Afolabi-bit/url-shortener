import { createContext, useEffect, useState } from "react";

const ShortenLinksContext = createContext({
	shortenLink: () => {},
	linksData: [],
});

export function ShortenLinksContextProvider({ children }) {
	const [rawUrl, setRawUrl] = useState("");
	const [linksData, setLinksData] = useState(() => {
		const stored = localStorage.getItem("shortly-data");
		return stored ? JSON.parse(stored) : [];
	});
	const [isFetching, setIsFetching] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	useEffect(() => {
		if (!rawUrl) {
			return;
		}
		async function shortenLink() {
			setIsFetching(true);
			setIsSuccessful(false);

			const body = `url=${encodeURIComponent(rawUrl)}`;
			const res = await fetch(
				"https://url-shortener-proxy-qj4m.onrender.com/shorten",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body,
				},
			);

			if (!res.ok) {
				setIsFetching(false);
				throw new Error("Failed to shorten URL");
			}

			const data = await res.json();

			const newEntry = {
				id: Date.now(),
				shortenedLink: data.result_url,
				rawUrl,
			};

			const updated = [newEntry, ...linksData];
			setLinksData(updated);
			setIsFetching(false);
			setIsSuccessful(true);
			localStorage.setItem("shortly-data", JSON.stringify(updated));
		}

		shortenLink();
	}, [rawUrl]);

	return (
		<ShortenLinksContext.Provider
			value={{ linksData, setRawUrl, isFetching, isSuccessful }}
		>
			{children}
		</ShortenLinksContext.Provider>
	);
}

export default ShortenLinksContext;
