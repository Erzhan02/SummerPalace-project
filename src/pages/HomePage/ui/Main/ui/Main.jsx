import OurInstagram from '@components/OurInstagram/ui/OurInstagram';
import AboutMore from '@components/AboutMore/ui/AboutMore';
import AboutRestaurant from '@components/AboutRestaurant/ui/AboutRestaurant';
import Carousel from '@components/Carousel/ui/Carousel';
import Contact from '@components/Contact/ui/Contact';
import Gallery from '@components/Gallery/ui/Gallery';

const Main = () => {
	return (
		<main>
			<Carousel />
			<AboutRestaurant />
			<Gallery />
			<AboutMore />
			<Contact />
			<OurInstagram />
		</main>
	);
};

export default Main;
