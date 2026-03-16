import { useEffect, useState } from 'react';
import classes from './Carousel.module.scss';
import CarouselCard from './CarouselCard';
import CarouselTracker from './CarouselTracker';
import slides from './slides';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(3);

	useEffect(() => {
		const updateSlides = () => {
			if (window.innerWidth <= 768) {
				setSlidesToShow(1);
			} else if (window.innerWidth <= 1024) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(3);
			}
		};

		updateSlides();
		window.addEventListener('resize', updateSlides);
		return () => {
			window.removeEventListener('resize', updateSlides);
		};
	}, []);

	const nextSlide = () => {
		setCurrentSlide(prev => Math.min(prev + 1, slides.length - slidesToShow));
	};

	const prevSlide = () => {
		setCurrentSlide(prev => Math.max(prev - 1, 0));
	};
	return (
		<section className={classes.carousel}>
			<div className={classes.carousel__container}>
				<div className={classes.carousel__viewport}>
					<div
						className={classes.carousel__track}
						style={{
							transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)`,
						}}
					>
						{slides.map((slide, index) => (
							<div key={index} className={classes.carousel__slide}>
								<CarouselCard {...slide} />
							</div>
						))}
					</div>
				</div>
				<CarouselTracker
					currentSlide={currentSlide}
					slidesCount={slides.length}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
					slidesToShow={slidesToShow}
				/>
			</div>
		</section>
	);
};

export default Carousel;
