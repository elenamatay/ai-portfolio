import React, { useState } from 'react';
import Button from '../reusable/Button';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); // Basic logging statement
        setFormData({
            ...formData,
            [name]: value
        });
        console.log('Updated formData:', formData); // Debugging statement
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted'); // Basic logging statement
        const { name, email, subject, message } = formData;

        console.log('Form data:', formData); // Debugging statement
        console.log('Calling sendEmail function'); // Debugging statement

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            console.log('Response received:', response); // Debugging statement

            const result = await response.json();

            if (result.success) {
                setSuccessMessage('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form fields
            } else {
                setSuccessMessage('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSuccessMessage('Failed to send message.');
        }
    };

    return (
        <div className="w-full lg:w-1/2">
            <div className="leading-loose">
                <form
                    onSubmit={handleSubmit} // Ensure the onSubmit handler is correctly attached
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Contact Form
                    </p>

                    {successMessage && (
                        <div className="mb-4 p-4 text-white bg-green-500 rounded">
                            {successMessage}
                        </div>
                    )}

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            aria-label="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        />
                    </div>

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            aria-label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        />
                    </div>

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="subject"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            aria-label="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        />
                    </div>

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            placeholder="Your message"
                            aria-label="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <Button
                            title="Send Message"
                            type="submit"
                            aria-label="Send Message"
                            className="font-general-medium text-white text-center font-medium tracking-wider bg-red-900 hover:bg-orange-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;