import HeroImg from "/images/hero.svg";
import HeroBg from "/images/heor-bg.svg";
import HeroIllustration from "/images/illustration-working.svg";

const Hero = () => {
	return (
		<section className="min-h-[558px] w-full pt-[23px] pb-[88px] overflow-hidden">
			<div className="container lg:flex lg:flex-row-reverse lg:gap-[102px] ">
				{/* Mobile hero image */}
				<div className="w-full  lg:hidden ">
					<div className="absolute top-[96px] right-0 w-[305px] h-[337px] overflow-hidden ">
						<img
							className="absolute top-0 left-0 w-[460px] h-[337px] z-[-1]  "
							src={HeroBg}
							alt="Illustration of a woman working at a computer"
						/>
					</div>
					<img
						className="w-full h-[270px] object-cover z-[10] mt-[44px] "
						src={HeroImg}
						alt="Illustration of a woman working at a computer"
					/>
				</div>

				{/* Desktop hero image */}
				<div className="hidden lg:block lg:w-[500px]">
					<div className="relative">
						<img
							src={HeroIllustration}
							alt=""
							className="absolute scale-[1.4] top-[60px] right-[-70px] "
						/>
					</div>
				</div>

				<div className="flex flex-col items-center h-[289px] mt-[60px] md:items-start md:w-[593px] md:h-[451px] ">
					<h1 className="font-bold text-[42px] leading-[48px] text-center tracking-[-1.05px] text-myPurple1 mb-[15px] md:font-bold md:leading-[90px] md:tracking-[-2px] lg:text-[80px] md:text-left">
						More than just shorter links
					</h1>

					<p className="font-[500] text-[18px] leading-[30px] tracking-[0.12px] text-center text-myGray1 mb-[32px]  md:text-[22px] md:leading-[36px] md:tracking-[0.15px] md:text-left">
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>

					<button className="bg-myCyan rounded-[28px] font-bold text-[20px] leading-[30px] text-white inline-block w-[197px] h-[56px] ">
						<span>Get Started</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
