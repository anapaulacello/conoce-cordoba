import React from "react";
import Slider from "infinite-react-carousel";

import "./Slider.css";

const Carousel = ({ images }) => {
	return (
		<div className="container">
			<section className="slider">
				<h1 className="slider__title">Carousel con infinite-react-carousel</h1>
				<Slider className="slider__content">
					{images.map((image) => (
						<div key={image.id} className="slider__content--item">
							<img src={image.image} alt={image.title} />
							<p className="slider-description">{image.title}</p>
						</div>
					))}
				</Slider>
			</section>
			<section className="slider">
				<h1 className="slider__title">Carousel con infinite-react-carousel</h1>
				<Slider className="slider__content">
					{images.map((image) => (
						<div key={image.id} className="slider__content--item">
							<img src={image.image} alt={image.title} />
							<p className="slider-description">{image.title}</p>
						</div>
					))}
				</Slider>
			</section>
		</div>
	);
};

export default Carousel;
