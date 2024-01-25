import React, { Component } from "react";
import logo from "../images/company-logo.jpg";
import gtaLogo from "../images/gta-logo.png";
class Navbar extends Component {
	state = {};
	render() {
		return (
			<>
				<nav className='bg-black w-screen h-20 p-5 flex justify-center items-center m-auto'>
					<img src={logo} alt='' className='w-12 h-8' />
					<div className='bg-gray-400 w-[0.5px] h-9'></div>
					<img src={gtaLogo} alt='' className='mx-3' />
					<ul className='flex text-white '>
						<a href='#'>
							<li>Overview</li>
							<li>GTA Online</li>
							<li>Story</li>
						</a>
					</ul>
				</nav>
			</>
		);
	}
}

export default Navbar;
