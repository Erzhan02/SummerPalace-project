import AppLink from '@shared/ui/AppLink/ui/AppLink';
import LocationIcon from '@shared/ui/assets/icons/locationIcon';
import MailIcon from '@shared/ui/assets/icons/mailIcon';
import PhoneIcon from '@shared/ui/assets/icons/phoneIcon';
import classes from './ContactInfo.module.scss';
import { contactsMock } from './contactMock';

const icons = {
	address: LocationIcon,
	phone: PhoneIcon,
	email: MailIcon,
};

const ContactInfo = () => {
	return (
		<div className={classes['contact-info']}>
			{contactsMock.map(location => (
				<div key={location.title} className={classes['contact-info__location']}>
					<h2 className={classes['contact-info__title']}>{location.title}</h2>
					{location.items.map(item => {
						const Icon = icons[item.type];
						return (
							<div key={item.text} className={classes['contact-info__item']}>
								<Icon className={classes['contact-info__icon']} />
								<AppLink className={classes['contact-info__link']}>
									{item.text}
								</AppLink>
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default ContactInfo;
