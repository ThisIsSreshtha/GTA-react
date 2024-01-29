import React, { Component } from "react";
import trinity from "../images/holy-trinity.png";
import gtaV from "../images/gta-logo2.png";
import gtaonline from "../images/gtaonline.png";
import gtaOnline from "../images/gta-online.png";
class Santos extends Component {
	state = {};
	render() {
		return (
			<>
				<Section
					image={trinity}
					logo={gtaV}
					heading={GTAV.heading}
					description_1={GTAV.description_1}
					description_2={GTAV.description_2}
				/>
				<Section
					image={gtaonline}
					logo={gtaOnline}
					heading={GTAOnline.heading}
					description_1={GTAOnline.description_1}
					description_2={GTAOnline.description_2}
				/>
			</>
		);
	}
}

let Section = ({ image, logo, heading, description_1, description_2 }) => {
	return (
		<>
			<div className='flex justify-center items-center bg-[#151515]'>
				<img src={image} alt='' className='w-screen' />
			</div>
			<div className='flex items-start bg-black px-[360px] text-white flex-col py-10'>
				<img src={logo} alt='' className='w-48' />
				<h1 className='text-4xl font-extrabold scale-y-150 my-7'>{heading}</h1>
				<p className='text-xl mb-10 tracking-wide'>{description_1}</p>
				<p className='text-xl mt-1 mb-10 tracking-wide'>{description_2}</p>
			</div>
		</>
	);
};
const GTAV = {
	heading: "Welcome to Los Santos",
	description_1:
		"When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
	description_2:
		"Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series XIS with a one-time migration.",
};
const GTAOnline = {
	heading: "Grand Theft Auto Online",
	description_1:
		"Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire.",
	description_2:
		"Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades, expansions, and content released since launch, ready to enjoy solo or with friends. Pull off daring co-operative Heists, enter adrenaline-fueled Stunt Races, compete in unique Adversary Modes, or hang out in social spaces including nightclubs, arcades, penthouse parties, car meetups, and much more.",
};
export default Santos;
