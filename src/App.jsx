import AdvancedStats from "./components/AdvancedStats";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ShortenLinksContextProvider } from "./store/ShortenLinksContext";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<ShortenLinksContextProvider>
				<AdvancedStats />
			</ShortenLinksContextProvider>
			<BoostLinks />
			<Footer />
		</>
	);
}

export default App;
