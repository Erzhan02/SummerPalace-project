import clsx from 'clsx';
import { Link } from 'react-router-dom';
import classes from './AppLink.module.scss';

const AppLink = ({ children, className, to, onClick }) => {
	return (
		<Link
			to={to}
			className={clsx(classes.defaultClass, className)}
			onClick={onClick}
		>
			{children}
		</Link>
	);
};

export default AppLink;
