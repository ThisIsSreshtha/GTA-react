import React, { useEffect } from "react";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = window.ScrollReveal();
		sr.reveal("#img-1,#img-2,.ul,.button,.icon", {
			reset: false,
			delay: 200,
			distance: "40px",
			origin: "top",
			duration: 2000,
		});
	}, []);

	return (
		<>
			<div id='#img-1'></div>
			<div id='#img2'></div>
			<div id='ul'></div>
			<div className='button'></div>
			<div className='icon'></div>
		</>
	);
};

export default ScrollRevealComponent;
