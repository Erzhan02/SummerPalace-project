import AppLink from '@shared/ui/AppLink/ui/AppLink';
import { logo } from '@shared/ui/assets/images';
import BurgerButton from '@shared/ui/BurgerButton/ui/BurgerButton';
import { useState } from 'react';
import classes from './Header.module.scss';
import NavList from './NavList';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<AppLink to='/' className={classes.header__logoLink}>
					<img src={logo} alt='' className={classes.header__logo} />
				</AppLink>

				<nav className={classes.header__nav}>
					<NavList
						linkClass={classes.header__link}
						activeLinkClass={classes['header__link--active']}
					/>
				</nav>

				<BurgerButton
					className={classes.header__burger}
					onClick={() => setOpen(true)}
				/>
			</div>

			{open && (
				<div
					className={classes.header__overlay}
					onClick={() => setOpen(false)}
				/>
			)}

			<aside
				className={`${classes.header__sidebar} ${
					open ? classes['header__sidebar--open'] : ''
				}`}
			>
				<BurgerButton
					className={classes.header__close}
					onClick={() => setOpen(false)}
				/>

				<nav className={classes.header__sidebarNav}>
					<NavList
						linkClass={classes.header__sidebarLink}
						activeLinkClass={classes['header__sidebarLink--active']}
					/>
				</nav>
			</aside>
		</header>
	);
};

export default Header;
