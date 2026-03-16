import CastleIcon from '@shared/ui/assets/icons/castleIcon';
import {
	image1,
	image2,
	image3,
	image4,
	image5,
} from '@shared/ui/assets/images';
import classes from './Gallery.module.scss';

const Gallery = () => {
	return (
		<section className={classes.gallery}>
			<div className={classes.gallery__container}>
				<div className={classes.gallery__row}>
					<div
						className={`${classes.gallery__col} ${classes['gallery__col--3']} ${classes.gallery__text}`}
					>
						<h2>галерея</h2>
						<CastleIcon className={classes.gallery__icon} />
						<p>летний дворец</p>
					</div>

					<div
						className={`${classes.gallery__col} ${classes['gallery__col--5']}`}
					>
						<img className={classes.gallery__image} src={image4} alt='' />
					</div>

					<div
						className={`${classes.gallery__col} ${classes['gallery__col--4']}`}
					>
						<img className={classes.gallery__image} src={image1} alt='' />
					</div>

					<div
						className={`${classes.gallery__col} ${classes['gallery__col--7']}`}
					>
						<img className={classes.gallery__image} src={image5} alt='' />
					</div>

					<div
						className={`${classes.gallery__col} ${classes['gallery__col--5']} ${classes['gallery__col--gap']}`}
					>
						<div
							className={`${classes.gallery__col} ${classes['gallery__col--12']}`}
						>
							<img className={classes.gallery__image} src={image3} alt='' />
						</div>

						<div
							className={`${classes.gallery__col} ${classes['gallery__col--12']}`}
						>
							<img className={classes.gallery__image} src={image2} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
