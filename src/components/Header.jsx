import { useState } from "react";
import Logo from "/images/logo.svg";
import Menu from "/images/menu.svg";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<header className="w-full h-[33px] mt-[40px] lg:mt-[48px] lg:h-[40px] ">
			{/* Smaller screen */}
			<div className="container flex justify-between relative md:hidden">
				<img
					className="h-full"
					src={Logo}
					alt="Shortly logo"
				/>
				<nav className="">
					<button onClick={() => setOpenNav((prev) => !prev)}>
						<img
							src={Menu}
							alt="menu icon"
						/>
					</button>
					{openNav && (
						<div className="w-full h-[383px] absolute top-[56px] left-[0px] rounded-[10px] bg-myPurple2 py-[40px] px-[24px] ">
							<div className="flex flex-col">
								<a
									href=""
									className="text-[18px] font-bold leading-[27px] text-white text-center pb-[30px]"
								>
									Features
								</a>
								<a
									href=""
									className="text-[18px] font-bold leading-[27px] text-white text-center pb-[30px] "
								>
									Pricing
								</a>
								<a
									href=""
									className="text-[18px] font-bold leading-[27px] text-white text-center pb-[30px] "
								>
									Resources
								</a>
							</div>
							<div className="border-t border-myGray1 w-full border-opacity-[0.25] flex flex-col gap-[24px] pt-[32px] ">
								<a
									href=""
									className="font-bold text-[18px] leading-[27px] text-center text-white "
								>
									Login
								</a>
								<a
									href=""
									className="bg-myCyan rounded-[28px] font-bold leading-[27px] text-white text-center inline-flex h-[48px]  items-center justify-center "
								>
									<span>Sign Up</span>
								</a>
							</div>
						</div>
					)}
				</nav>
			</div>

			{/* Larger screens */}
			<div className="container hidden md:flex justify-between h-full">
				<div className="flex h-full items-center gap-[45.4px]">
					<img
						src={Logo}
						alt=""
					/>
					<div className="flex items-center h-full w-[265px] justify-between ">
						<a
							href="#"
							className="font-bold text-[15px] leading-[12px] text-myGray1 "
						>
							Features
						</a>
						<a
							href="#"
							className="font-bold text-[15px] leading-[12px] text-myGray1 "
						>
							Pricing
						</a>
						<a
							href="#"
							className="font-bold text-[15px] leading-[12px] text-myGray1 "
						>
							Resources
						</a>
					</div>
				</div>
				<div className="flex items-center h-full gap-[37px]">
					<a
						href="#"
						className="font-bold text-[15px] leading-[22px] text-myGray1 "
					>
						Login
					</a>
					<a
						href="#"
						className="font-bold text-[15px] leading-[22px] text-white bg-myCyan rounded-[28px] h-full w-[105px] flex
						items-center justify-center "
					>
						<span>Sign Up</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
