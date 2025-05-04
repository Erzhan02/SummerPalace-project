import React from 'react';
import AboutMore from '../../AboutMore/ui/AboutMore';
import AboutRestaurant from '../../AboutRestaurant/ui/AboutRestaurant';
import Carousel from '../../Carousel/ui/Carousel';
import Event from '../../Event/ui/Event';
import Gallery from '../../Gallery/ui/Gallery';

const Main = () => {
	return (
		<main>
			<Carousel />
			<AboutRestaurant />
			<Gallery />
			<AboutMore />
			<Event />
		</main>
	);
};

export default Main;
