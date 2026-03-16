import { image1, image4 } from '@/shared/ui/assets/images';
import CastleIcon from '@shared/ui/assets/icons/CastleIcon';
import classes from './OurInstagram.module.scss';

const OurInstagram = () => {
	return (
		<section className={classes.instagram}>
			<div className={classes.instagram__container}>
				<div className={classes.instagram__header}>
					<h2 className={classes.instagram__title}>наш instagram</h2>
					<CastleIcon className={classes.instagram__icon} />
					<p className={classes.instagram__subtitle}>летний дворец</p>
				</div>

				<div className={classes.instagram__gallery}>
					<img className={classes.instagram__image} src={image1} alt='' />
					<img className={classes.instagram__image} src={image4} alt='' />
					<img className={classes.instagram__image} src={image1} alt='' />
					<img className={classes.instagram__image} src={image4} alt='' />
					<img className={classes.instagram__image} src={image1} alt='' />
					<img className={classes.instagram__image} src={image4} alt='' />
				</div>
			</div>
		</section>
	);
};

export default OurInstagram;
