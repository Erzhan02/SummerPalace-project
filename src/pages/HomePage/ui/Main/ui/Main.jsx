import AboutMore from '@components/AboutMore/ui/AboutMore';
import AboutRestaurant from '@components/AboutRestaurant/ui/AboutRestaurant';
import Carousel from '@components/Carousel/ui/Carousel';
import Event from '@components/Event/ui/Event';
import Gallery from '@components/Gallery/ui/Gallery';

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
