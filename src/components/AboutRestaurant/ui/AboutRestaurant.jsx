import classes from './AboutRestaurant.module.scss';
import info from './info';

const firstIcon = info.features[0].icon;

const AboutRestaurant = () => {
	return (
		<section className={classes['about-restaurant']}>
			<div className={classes['about-restaurant__container']}>
				<div className={classes['about-restaurant__header']}>
					<div className={classes['about-restaurant__header-content']}>
						<h2 className={classes['about-restaurant__header-title']}>
							{info.heading}
						</h2>
						<img
							className={classes['about-restaurant__header-icon']}
							src={firstIcon}
							alt=''
						/>
						<p className={classes['about-restaurant__header-text']}>
							{info.name}
						</p>
					</div>
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
						{info.features.map(feature => (
							<div
								key={feature.id}
								className={classes['about-restaurant__feature']}
							>
								<div className={classes['about-restaurant__feature-header']}>
									<img
										src={feature.icon}
										alt=''
										className={classes['about-restaurant__feature-icon']}
									/>
									<h3 className={classes['about-restaurant__feature-title']}>
										{feature.title}
									</h3>
								</div>
								<p className={classes['about-restaurant__feature-text']}>
									{feature.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutRestaurant;
