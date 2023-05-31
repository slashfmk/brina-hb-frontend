import React from 'react'
import { FaPhone } from 'react-icons/fa';
import Footer from '../sections/Footer';

import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className="grow">

                <Section title='Appointment booking'>
                    <div className='text-left'>

                        We're excited to assist you in scheduling an appointment with our skilled stylists. To book your appointment, you have the following options:

                        <p className={`my-4`}>
                            Fill out the appointment booking form on our website: <Link to={'/appointment'} className={`text-pink-600 underline`} >Book here</Link>.
                        </p>

                        <p>
                            Send us an email at <b>brinettelohombo7@gmail.com</b> with your preferred date and time, along with any specific services you're interested in.
                        </p>

                    </div>
                </Section>

                <Section title='Business hours'>

                    <ul>
                        <li>Monday to Friday: 10am - 8pm</li>
                        <li>Saturday: 12pm - 6pm</li>
                        <li>Sunday: Closed</li>

                    </ul>

                </Section>

                <Section title='Location'>

                    <div className="my-3">
                        Find us easily by referring to the interactive map below. Simply enter your starting point for step-by-step directions to our salon.
                    </div>


                    <iframe className="w-full"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=314%2066th%20Ave%20sw+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="500"
                        height="450"></iframe>
                </Section>

            </main>
            <Footer />
        </div>
    )
}

export default Contact;