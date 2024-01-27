import React, { Component } from "react";
import trinity from "../images/holy-trinity.png";
import gtaV from "../images/gta-logo2.png";
class Santos extends Component {
	state = {};
	render() {
		return (
			<>
				<div className='flex justify-center items-center bg-[#151515]'>
					<img src={trinity} alt='' className='w-screen' />
				</div>
				<div className='flex items-start bg-black px-[360px] text-white flex-col py-10'>
					<img src={gtaV} alt='' className='w-40' />
					<h1 className='text-4xl font-extrabold scale-y-150 my-7'>
						Welcome to Los Santos
					</h1>
					<p className='text-xl mb-10 tracking-wide'>
						When a young street hustler, a retired bank robber, and a terrifying
						psychopath find themselves entangled with some of the most
						frightening and deranged elements of the criminal underworld, the
						U.S. government, and the entertainment industry, they must pull off
						a series of dangerous heists to survive in a ruthless city in which
						they can trust nobody — least of all each other.
					</p>
					<p className='text-xl mt-1 mb-10 tracking-wide'>
						Current players can transfer both GTAV Story Mode progress and GTA
						Online characters and progression to PlayStation 5 and Xbox Series
						XIS with a one-time migration.
					</p>
				</div>
			</>
		);
	}
}

export default Santos;
