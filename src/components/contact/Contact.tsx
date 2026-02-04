import { useState } from 'react';
import contact from '../../images/contact.png';
import './Contact.scss';
import { messageService } from '../../services/messageService';

// --- Types ---
interface FormFields {
    name: string;
    phone: string;
    email: string;
    message: string;
}

interface FormErrors {
    [key: string]: string | undefined;
}

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormFields>({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const errorValidation = (): boolean => {
        const { name, phone, email, message } = formData;
        let currentErrors: FormErrors = {};
        let formIsValid = true;

        // Name Validation
        if (!name) {
            formIsValid = false;
            currentErrors.name = "Cannot be empty";
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            formIsValid = false;
            currentErrors.name = "Only letters";
        }

        // Email Validation
        if (!email) {
            formIsValid = false;
            currentErrors.email = "Cannot be empty";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formIsValid = false;
                currentErrors.email = "Email is not valid";
            }
        }

        // Phone & Message Validation
        if (!phone) {
            formIsValid = false;
            currentErrors.phone = "Cannot be empty";
        }
        if (!message) {
            formIsValid = false;
            currentErrors.message = "Cannot be empty";
        }

        setErrors(currentErrors);
        return formIsValid;
    };

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (errorValidation()) {
            try {
                await messageService.sendMail(formData);
                setSubmitted(true);
                // Optional: Reset form here
            } catch (error) {
                console.error("Mail error:", error);
                setSubmitted(false);
            }
        }
    };

    const setValue = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const backgroundImage: React.CSSProperties = {
        backgroundImage: `url(${contact})`,
    };

    return (
        <section id="section-5" style={backgroundImage} className="section-contact">
            <div className="container">
                <div className="section__head section--header-underline">
                    <h1 className="section__title">Contact</h1>
                </div>

                <div className="section__body">
                    <div className="contact">
                        <div className="contact__aside">
                            <h2 className="contact__title">Address Information</h2>
                            <ul className="list-contacts">
                                <li>
                                    <p>
                                        <svg className="ico-phone" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <strong className="list-contacts-title">Phone</strong>
                                    </p>
                                    <a href="tel:+359897765506">+359897765506</a>
                                </li>
                                <li>
                                    <p>
                                        <svg className="ico-email" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                        </svg>
                                        <strong className="list-contacts-title">Email</strong>
                                    </p>
                                    <a href="mailto:emilgeorgievit@gmail.com">emilgeorgievit@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact__content">
                            <form className="contact-form" onSubmit={onSubmit}>
                                <div className="form__head">
                                    <h2 className="form__title">Get in Touch</h2>
                                </div>

                                <div className="form__body">
                                    <div className="form__control">
                                        <input
                                            className="form__input"
                                            type="text"
                                            onChange={setValue}
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                        />
                                        <span className="contact-error">{errors.name}</span>
                                    </div>

                                    <div className="form__control">
                                        <input
                                            className="form__input"
                                            type="email"
                                            name="email"
                                            onChange={setValue}
                                            placeholder="Your Email"
                                            value={formData.email}
                                        />
                                        <span className="contact-error">{errors.email}</span>
                                    </div>

                                    <div className="form__control">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="phone"
                                            onChange={setValue}
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                        />
                                        <span className="contact-error">{errors.phone}</span>
                                    </div>

                                    <div className="form__control">
                                        <textarea
                                            className="form__input form__textarea"
                                            onChange={setValue}
                                            name="message"
                                            id="message"
                                            placeholder="Your Message"
                                            cols={30}
                                            rows={10}
                                            value={formData.message}
                                        />
                                        <span className="contact-error">{errors.message}</span>
                                    </div>

                                    {submitted && (
                                        <div className="form__control">
                                            <span className="contact-error" style={{ color: 'green' }}>
                                                Message sent successfully!
                                            </span>
                                        </div>
                                    )}

                                    <div className="form__actions">
                                        <button type="submit" className="btn-submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};