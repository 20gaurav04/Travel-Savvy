import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_r53ljz2', 'template_ulqwpn3', form.current, {
                publicKey: 'U-GvooYT-GlJPjcoK',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-8"
            style={{
                backgroundImage: `url('./assets/contactUs.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-center text-yellow-500 mb-6">Contact Us</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Enter Your Name"
                            required
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="your_email"
                            placeholder="Enter Your Email Address"
                            required
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Feel free to ask any queries."
                            required
                            className="p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-2xl font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg hover:from-yellow-600 hover:to-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
