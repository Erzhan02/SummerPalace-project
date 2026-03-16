import AppLink from '@shared/ui/AppLink/ui/AppLink';
import { logo } from '@shared/ui/assets/images';
import BurgerButton from '@shared/ui/BurgerButton/ui/BurgerButton';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.scss';
import navLinks from './navLinks';

const Header = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<AppLink to='/' className={classes.header__logoLink}>
					<img src={logo} alt='' className={classes.header__logo} />
				</AppLink>

				<nav className={classes.header__nav}>
					{navLinks.map(link => (
						<AppLink
							key={link.to}
							to={link.to}
							className={
								location.pathname === link.to
									? `${classes.header__link} ${classes['header__link--active']}`
									: classes.header__link
							}
						>
							{link.label}
						</AppLink>
					))}
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
					{navLinks.map(link => (
						<AppLink
							key={link.to}
							to={link.to}
							className={
								location.pathname === link.to
									? `${classes.header__sidebarLink} ${classes['header__sidebarLink--active']}`
									: classes.header__sidebarLink
							}
						>
							{link.label}
						</AppLink>
					))}
				</nav>
			</aside>
		</header>
	);
};

export default Header;
