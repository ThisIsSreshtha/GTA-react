import React, { Component } from "react";
import logo from "../images/company-logo.jpg";
import gtaLogo from "../images/gta-logo.png";
class Navbar extends Component {
	state = {};
	render() {
		return (
			<>
				<nav className='bg-black text-white w-screen h-20 py-5 px-16 flex justify-center items-center m-auto'>
					<img src={logo} alt='' className='w-12 h-8' />
					<div className='bg-gray-400 w-[0.5px] h-9'></div>
					<img src={gtaLogo} alt='' className='mx-3' />
					<ul className='flex justify-around items-center w-screen'>
						<a href='#'>
							<li>Overview</li>
						</a>
						<a href='#'>
							<li>GTA Online</li>
						</a>
						<a href='#'>
							<li>Story</li>
						</a>
						<a href='#'>
							<li>GTA+</li>
						</a>
						<a href='#'>
							<li>Community</li>
						</a>
						<a href='#'>
							<li>Support</li>
						</a>
					</ul>
					<button className=' w-40 h-10 border border-white rounded'>
						Buy Now
					</button>
				</nav>
			</>
		);
	}
}

export default Navbar;
