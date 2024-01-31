import React, { Component } from "react";
import image1 from "../images/img-1.png";
import image2 from "../images/img-2.png";
import image3 from "../images/img-3.png";
import { Carousel as MyCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Carousel extends Component {
	state = {};
	render() {
		return (
			<MyCarousel
				className='w-full'
				showThumbs={false}
				showStatus={false}
				infiniteLoop
				autoPlay
				interval={3000}>
				<div className='h-64'>
					<img
						src={image1}
						alt='Image 1'
						className='object-cover w-full h-full'
					/>
				</div>
				<div className='h-64'>
					<img
						src={image2}
						alt='Image 2'
						className='object-cover w-full h-full'
					/>
				</div>
				<div className='h-64'>
					<img
						src={image3}
						alt='Image 3'
						className='object-cover w-full h-full'
					/>
				</div>
			</MyCarousel>
		);
	}
}

export default Carousel;
