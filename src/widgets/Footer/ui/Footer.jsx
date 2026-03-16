import AppLink from '@shared/ui/AppLink/ui/AppLink';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__copyright}>
				Copyright (с) 2026 Ресторан “Летний дворец”
			</div>
			<div className={classes.footer__navigate}>
				<AppLink className={classes.footer__link}>Facebook</AppLink>
				<AppLink className={classes.footer__link}>VK</AppLink>
				<AppLink className={classes.footer__link}>Instagram</AppLink>
			</div>
		</footer>
	);
};

export default Footer;
