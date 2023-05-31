import React from 'react'
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';

const About = () => {

    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />
            <main className="w-full grow">

                <Section title='Our mission'>
                    <p className="text-justify">
                    At Brina Hair beauty, our mission is to empower women by enhancing their natural beauty through exceptional hairstyling and personalized care. We strive to create a welcoming and inclusive environment where every client feels valued, heard, and confident in their unique style.
                    </p>
                </Section>

                <Section title='Our expertise'>
                    <p className="text-justify">
                    Our team of expert stylists brings a wealth of knowledge and creativity to the table. With extensive training and years of experience in the industry, they are adept at working with all hair types, textures, and lengths. Whether you're looking for a trendy haircut, a vibrant hair color, or a glamorous updo, our stylists have the skills and expertise to deliver exceptional results. We stay up-to-date with the latest techniques, trends, and innovations in the world of hairstyling to ensure you receive the best possible service.
                   </p>
                </Section>

                <Section title='Our team'>
                    <p className="text-justify">
                    We take pride in our team of dedicated and passionate professionals. Each stylist at [Salon Name] brings their unique skills, specialties, and artistic flair to the table. We believe in fostering a collaborative and supportive environment where our team members can grow and thrive. Get to know our talented team of stylists and discover the expertise they bring to every hairstyle.
                    </p>
                </Section>

            </main>
            <Footer />
        </div>
    )
}

export default About;