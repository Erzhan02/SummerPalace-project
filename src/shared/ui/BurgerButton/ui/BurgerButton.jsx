import BurgerButtonIcon from '../../assets/icons/burgerButtonIcon';
import classes from './BurgerButton.module.scss';

const BurgerButton = ({ onClick }) => {
	return (
		<button className={classes.burgerWrapper} onClick={onClick}>
			<BurgerButtonIcon />
		</button>
	);
};

export default BurgerButton;
