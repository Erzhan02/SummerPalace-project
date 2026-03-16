import classes from './Contact.module.scss';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
	return (
		<section className={classes.contact}>
			<div className={classes.contact__container}>
				<div className={classes.contact__content}>
					<div className={classes.contact__intro}>
						<h2>хотите провести мероприятие?</h2>
						<p>
							Или у вас остались вопросы, на которые мы сможем вам ответить в
							процессе разговора - напишите нам. Мы открыты для диалога!
						</p>
					</div>
					<ContactInfo />
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
