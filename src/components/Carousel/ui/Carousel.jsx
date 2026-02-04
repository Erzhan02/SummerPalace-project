import { image2 } from '@shared/assets/images';
import classes from './Carousel.module.scss';

const Carousel = () => {
	return (
		<section>
			<div className={classes.container}>
				<div className={classes.row}>
					<div
						className={classes.col4}
						style={{ backgroundImage: `url(${image2})` }}
					>
						<div className={classes.hoverText}>
							<div className={classes.hoverContent}>
								<h2>корпоративы</h2>
								<p>Отметьте лучший праздник в лучшем дворце Петербурга!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
