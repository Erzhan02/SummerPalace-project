import classes from './FeatureCard.module.scss';

const FeatureCard = ({ icon: Icon, title, text }) => {
	return (
		<div className={classes.feature}>
			<div className={classes.feature__header}>
				<Icon className={classes.feature__icon} />
				<h3 className={classes.feature__title}>{title}</h3>
			</div>
			<p className={classes.feature__text}>{text}</p>
		</div>
	);
};

export default FeatureCard;
