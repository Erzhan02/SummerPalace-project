import classes from './ContactForm.module.scss';

const ContactForm = () => {
	return (
		<form className={classes['contact-form']}>
			<input
				type='text'
				placeholder='Ваше имя'
				className={classes['contact-form__name']}
			/>

			<input
				type='email'
				placeholder='Ваш e-mail'
				className={classes['contact-form__mail']}
			/>

			<textarea
				placeholder='Сообщение'
				className={classes['contact-form__message']}
			></textarea>
			<button className={classes['contact-form__button']}>Отправить</button>
		</form>
	);
};

export default ContactForm;
