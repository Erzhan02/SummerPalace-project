import AppLink from '@shared/AppLink/ui/AppLink';
import BurgerButton from '@shared/BurgerButton/ui/BurgerButton';
import { logo } from '@shared/assets/images';
import classes from './Header.module.scss';

const Header = () => {
	return (
		<div className={classes.container}>
			<header className={classes.header}>
				<img src={logo} alt='' className={classes.logo} />
				<nav className={classes.nav}>
					<AppLink>Главная</AppLink>
					<AppLink>SOFIT EVENT HOUSE</AppLink>
					<AppLink>МЕРОПРИЯТИЯ</AppLink>
					<AppLink>ТУРИСТАМ</AppLink>
					<AppLink>КЕЙТЕРИНГ</AppLink>
					<AppLink>ДЛЯ АГЕНТСТВ</AppLink>
				</nav>
				<BurgerButton />
			</header>
		</div>
	);
};

export default Header;
