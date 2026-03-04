import ChevronLeft from '@shared/ui/assets/icons/chevron-left';
import ChevronRight from '@shared/ui/assets/icons/chevron-right';
import classes from './CarouselTracker.module.scss';

const CarouselTracker = ({
	currentSlide,
	slidesCount,
	nextSlide,
	prevSlide,
	slidesToShow,
}) => {
	const totalIndicators = slidesCount - slidesToShow + 1;

	return (
		<div className={classes['carousel-tracker']}>
			<button
				className={`${classes['carousel-tracker__button']}
				${currentSlide === 0 ? classes['carousel-tracker__button--disabled'] : ''}`}
				onClick={prevSlide}
				disabled={currentSlide === 0}
			>
				<ChevronLeft />
			</button>

			<div className={classes['carousel-tracker__wrapper']}>
				{Array.from({ length: slidesCount - slidesToShow + 1 }).map(
					(_, index) => (
						<div
							key={index}
							className={`${classes['carousel-tracker__line']} ${
								index === currentSlide
									? classes['carousel-tracker__line--current']
									: ''
							}`}
						></div>
					)
				)}
			</div>

			<button
				className={`${classes['carousel-tracker__button']} ${
					currentSlide === totalIndicators - 1
						? classes['carousel-tracker__button--disabled']
						: ''
				}`}
				onClick={nextSlide}
				disabled={currentSlide === totalIndicators - 1}
			>
				<ChevronRight />
			</button>
		</div>
	);
};

export default CarouselTracker;
