import HeroImg from "/images/hero.svg";
import HeroBg from "/images/heor-bg.svg";

const Hero = () => {
	return (
		<section className="min-h-[558px]  pt-[23px] overflow-visible">
			<div className="w-full overflow-visible ">
				<img
					className="absolute top-[96px] left-[45px] w-[460px] h-[337px] z-[-1] max-w-none  "
					src={HeroBg}
					alt="Illustration of a woman working at a computer"
				/>
				<img
					className="w-full h-[270px] object-cover z-[10] mt-[44px] "
					src={HeroImg}
					alt="Illustration of a woman working at a computer"
				/>
			</div>
			<div className="flex flex-col items-center h-[289px] mt-[60px] ">
				<h1 className="font-bold text-[42px] leading-[48px] text-center tracking-[-1.05px] text-myPurple1 mb-[15px] ">
					More than just shorter links
				</h1>

				<p className="font-[500] text-[18px] leading-[30px] tracking-[0.12px] text-center text-myGray1 mb-[32px] ">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>

				<button className="bg-myCyan rounded-[28px] font-bold text-[20px] leading-[30px] text-white inline-block w-[197px] h-[56px] ">
					<span>Get Started</span>
				</button>
			</div>
		</section>
	);
};

export default Hero;
