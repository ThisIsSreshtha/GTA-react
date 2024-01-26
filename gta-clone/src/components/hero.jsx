import React, { Component } from "react";
import hero from "../images/hero-image.jpg";

class Hero extends Component {
	state = {};
	render() {
		return (
			<>
				<img src={hero} alt='' className='w-full h-screen' />
			</>
		);
	}
}

export default Hero;
