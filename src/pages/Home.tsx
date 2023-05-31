import React from "react";
import Header from "../sections/Header";
import Section from "../sections/Section";

import ImageCard from "../components/ImageCard";
import Footer from "../sections/Footer";


import Carousel from "nuka-carousel";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* <Header /> */}
            <Header />

            <main className="w-full grow">
                <Section >

                    <div className="flex md:flex-row flex-col content-center justify-center mb-[-20px] my-4">
                        <img src={`images/hero.jpg`} width="320" className="self-center md:self-start mr-5 mb-4" />
                        <div className="text-justify self-center">
                            <p className="pb-2">
                                Welcome to Brina Hair Beauty, where we believe that every woman deserves to feel confident and beautiful in her own skin. Our passion is creating stunning hairstyles that reflect your individuality and enhance your natural beauty. Step into our world of creativity, expertise, and personalized care.
                            </p>

                        </div>
                    </div>
                </Section>

                {/*  image section */}
                <Section title={"Excellent service"} isDark >

                    {/* <div className="flex flex-wrap justify-between content-between w-full"> */}

                    <div className={`text-justify mb-4`}>
                        Experience the power of transformation with our diverse range of hairstyles. Whether you're looking for a chic pixie cut, a vibrant hair color change, or an elegant updo for a special occasion, our skilled stylists are here to make your hair dreams a reality.
                    </div>

                    <Carousel autoplay >

                        <ImageCard img={`/images/bncar.jpg`} />

                        <ImageCard img={`/images/add2.jpg`} />

                        <ImageCard img={`/images/bncord.jpg`} />

                        <ImageCard img={`/images/bl.jpg`} />

                        <ImageCard img={`/images/braid1.jpg`} />

                        <ImageCard img={`/images/braid9.jpg`} />

                        <ImageCard img={`/images/braid222.jpg`} />

                        <ImageCard img={`/images/bn33.jpg`} />

                    </Carousel>


                    {/* </div> */}

                </Section>

                <Section title={"Make an appointment"}>
                    <p className="text-justify">
                        Ready to embark on your hair journey? Book an appointment today and let our talented team bring your vision to life. Discover the art of hairstyling and experience the difference at Brina Hair Beauty.
                    </p>
                </Section>


                <Section title={"Why choose us?"} isDark>
                    <p className="text-justify mb-2">
                        <p className={`font-bold`}>Expert Stylists:</p> Our team of highly skilled stylists has years of experience and keeps up with the
                        latest trends and techniques. We are dedicated to providing exceptional service and ensuring your complete satisfaction.
                    </p>

                    <p className="text-justify mb-2">
                        <p className={`font-bold`}>Customized Approach:</p> Our team of highly skilled stylists has years of experience and keeps up with the
                        latest trends and techniques. We are dedicated to providing exceptional service and ensuring your complete satisfaction.
                    </p>

                    <p className="text-justify mb-2">
                        <p className={`font-bold`}>Quality Products</p>
                        We use only the highest quality hair care products that nourish and protect your hair. Our selection includes professional-grade brands known for their effectiveness and sustainability.
                    </p>

                </Section>

                <Section title={"Ready to Transform Your Hair?"} >
                    <p className="text-justify mb-6">
                        Discover the possibilities that await you. Explore our services, browse our gallery of stunning hairstyles, and gain inspiration from our expertly crafted blog. At Brina Hair Beauty, we're dedicated to helping you achieve the hair of your dreams. Book your appointment today and let us create a hairstyle that showcases your beauty and boosts your confidence.
                    </p>

                    <Link to={"/appointment/"} >
                        <Button title={"Book now"} />
                    </Link>

                </Section>
            </main>

            <Footer />
        </div>

    );
};

export default Home;
