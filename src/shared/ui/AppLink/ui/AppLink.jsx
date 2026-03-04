import clsx from 'clsx';
import { Link } from 'react-router-dom';
import classes from './AppLink.module.scss';

const AppLink = ({ children, className, to }) => {
	return (
		<Link to={to} className={clsx(classes.defaultClass, className)}>
			{children}
		</Link>
	);
};

export default AppLink;
