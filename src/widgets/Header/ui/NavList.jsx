import AppLink from '@shared/ui/AppLink/ui/AppLink';
import { useLocation } from 'react-router-dom';
import navLinks from './navLinks';

const NavList = ({ linkClass, activeLinkClass }) => {
	const location = useLocation();

	return (
		<>
			{navLinks.map(link => (
				<AppLink
					key={link.to}
					to={link.to}
					className={
						location.pathname === link.to
							? `${linkClass} ${activeLinkClass}`
							: linkClass
					}
				>
					{link.label}
				</AppLink>
			))}
		</>
	);
};

export default NavList;
