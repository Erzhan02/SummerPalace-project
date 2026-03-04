import AppLink from '@shared/ui/AppLink/ui/AppLink';
import { logo } from '@shared/ui/assets/images';
import BurgerButton from '@shared/ui/BurgerButton/ui/BurgerButton';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
	return (
		<div className={classes.container}>
			<header className={classes.header}>
				<Link to={'/'}>
					<img src={logo} alt='' className={classes.logo} />
				</Link>
				<nav className={classes.nav}>
					<AppLink to={'/'}>Главная</AppLink>
					<AppLink to={'/soffitEventHouse'}>SOFFIT EVENT HOUSE</AppLink>
					<AppLink to={'/events'}>МЕРОПРИЯТИЯ</AppLink>
					<AppLink to={'/forTourists'}>ТУРИСТАМ</AppLink>
					<AppLink to={'/catering'}>КЕЙТЕРИНГ</AppLink>
					<AppLink to={'/forAgencies'}>ДЛЯ АГЕНТСТВ</AppLink>
				</nav>
				<BurgerButton />
			</header>
		</div>
	);
};

export default Header;
