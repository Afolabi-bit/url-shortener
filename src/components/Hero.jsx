import HeroImg from "/images/illustration-working.svg";

const Hero = () => {
	return (
		<section className="flex flex-col-reverse">
			<div className="">
				<h1 className="font-bold text-[42px] leading-[48px] text-center tracking-[-1.05px] text-myPurple1 ">
					More than just shorter links
				</h1>
				<p className="font-[500] text-[18px] leading-[0.1227px] text-myGray1 ">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="bg-myCyan rounded-[28px] font-bold text-[20px] leading-[30px] text-white w-[197px] h-[56px] ">
					<span>Get Started</span>
				</button>
			</div>
			<div className="w-full relative ">
				<img
					className="asolute left-4 top-0 w-full h-full object-cover "
					src={HeroImg}
					alt="Illustration of a woman working at a computer"
				/>
			</div>
		</section>
	);
};

export default Hero;
