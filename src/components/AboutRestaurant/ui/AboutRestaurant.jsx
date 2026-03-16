import CastleIcon from '@shared/ui/assets/icons/castleIcon';
import classes from './AboutRestaurant.module.scss';
import FeatureCard from './FeatureCard';
import info from './info';
import VideoBlock from './VideoBlock';

const AboutRestaurant = () => {
	return (
		<section className={classes['about-restaurant']}>
			<div className={classes['about-restaurant__container']}>
				<div className={classes['about-restaurant__header']}>
					<div className={classes['about-restaurant__header-content']}>
						<h2 className={classes['about-restaurant__header-title']}>
							{info.heading}
						</h2>
						<CastleIcon className={classes['about-restaurant__header-icon']} />
						<p className={classes['about-restaurant__header-text']}>
							{info.name}
						</p>
					</div>
				</div>
				<div className={classes['about-restaurant__video']}>
					<VideoBlock />
				</div>
				<div className={classes['about-restaurant__intro']}>
					<div className={classes['about-restaurant__intro-content']}>
						<img
							src={info.logo}
							alt='Летний Дворец'
							className={classes['about-restaurant__logo']}
						/>
						<p className={classes['about-restaurant__description']}>
							{info.description}
						</p>
					</div>
					<div className={classes['about-restaurant__features']}>
						{info.features?.map(feature => (
							<FeatureCard key={feature.title} {...feature} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutRestaurant;
