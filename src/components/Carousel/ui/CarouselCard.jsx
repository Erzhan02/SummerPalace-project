import classes from './CarouselCard.module.scss';

const CarouselCard = ({ image, title, text }) => {
	return (
		<div className={classes.card} style={{ backgroundImage: `url(${image})` }}>
			<div className={classes.card__overlay}>
				<div className={classes.card__content}>
					<h2 className={classes.card__title}>{title}</h2>
					<p className={classes.card__text}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
