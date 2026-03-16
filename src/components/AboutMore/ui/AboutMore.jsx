import classes from './AboutMore.module.scss';

const AboutMore = () => {
	return (
		<section className={classes.aboutMore}>
			<div className={classes.aboutMore__content}>
				<h2 className={classes.aboutMore__title}>узнайте о нас больше</h2>
				<div className={classes.aboutMore__actions}>
					<button className={classes.aboutMore__button}>Скачать план</button>
					<button className={classes.aboutMore__button}>
						Скачать презентацию
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutMore;
