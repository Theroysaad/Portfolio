'use client';

import { Carousel } from 'flowbite-react';

import { useContext } from 'react';
import './firstSection.scss'
import { MyContext } from '../../../utils/contextProvider';
import { motion, useScroll } from 'framer-motion';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import me from '../../../assets/img/me.png';
import original from '../../../assets/img/originalMe.JPG';
import logo from '../../../assets/img/logo 2.png';
import javascript from '../../../assets/img/JAVASCRIPT.png';
import html from '../../../assets/img/html&css.png';
import bootstrap from '../../../assets/img/bootstrap2.png';
import tailwind from '../../../assets/img/talwind.png';
import react from '../../../assets/img/react.png';
import laravel from '../../../assets/img/laravel.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';








export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)

    const fadeIn = (direction, duration) => ({
        hidden: { opacity: 0, x: direction === "left" ? 100 : -100 },
        show: { opacity: 1, x: 0, transition: { duration } }
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_n91h0zu', 'template_j7vpxz9', form.current, {
                publicKey: 'kDewNKetQ30rs446g',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <section className='body flex justify-between container  '>

                <div className='flex justify-between container p-1 pt-20  '>
                    <section className='h-[80vh] w-[100%] flex flex-col gap-[20vh] overflow-y-auto'>

                        {/* /section number 1/ */}

                        <div id='Home' className=' section_1 h-[100%] w-[100%] flex justify-evenly '>
                            <div className=' flex flex-col justify-center gap-y-10 w-[45%]'>
                                <p className='intro '>
                                    Hello, I'm
                                </p>
                                <motion.h1
                                    dragConstraints={{
                                        top: -50,
                                        left: -50,
                                        right: 50,
                                        bottom: 50,
                                    }}
                                    variants={fadeIn("right", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    className='test-font  text-7xl font-extrabold'>SAAD EL GHAZY</motion.h1>
                                <h2 className='intro '>
                                    Aspiring Junior Web Developer passionate about crafting elegant and functional websites.
                                </h2>
                            </div>
                            <div>
                                <div className='shadow-2xl'>
                                    <img src={me} alt="" />
                                </div>
                            </div>

                            {/* /section_2  about / */}
                        </div>
                        <section id='About' className='About flex flex-col-reverse items-center justify-center text-center gap-10 '>
                            <motion.div
                                dragConstraints={{
                                    top: -50,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }}
                                variants={fadeIn("right", 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                className='flex flex-col w-[70%] text-about gap-y-10 py-10 '>
                                <div>
                                    <h1 className='text-5xl'>Hi, I'm </h1>
                                </div>
                                <div>
                                    <h1 className='test-font text-7xl font-extrabold'>SAAD EL GHAZY</h1>
                                </div>
                                <div>
                                    <h1 className='text-4xl'>
                                        a 20-year-old freelancer specializing in front-end development. With 6 months of coding experience, I'm dedicated to crafting visually appealing and user-friendly websites. Let's work together to bring your digital projects to life!
                                    </h1>
                                </div>
                            </motion.div>

                            <motion.div className=' flex justify-center items-center '
                            >
                                <motion.img src={logo} alt=""
                                    className='shadow-lg'
                                    drag
                                    dragConstraints={{
                                        top: -50,
                                        left: -50,
                                        right: 50,
                                        bottom: 50,
                                    }}
                                />
                            </motion.div>
                        </section>

                        {/* section_3  skills */}

                        <section id='Skills' className='  flex items-center justify-center '>

                            <div className='w-[80%] flex flex-col gap-10'>
                                <div className='flex justify-evenly '>
                                    <div className='test-font text-7xl font-extrabold'>
                                        FRONT-END
                                    </div>

                                    <div className='test-font text-7xl font-extrabold'>
                                        BACK-END
                                    </div>
                                </div>

                                <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 ">
                                    <Carousel className='border-2 border-black'>
                                        <img src={html} alt="..." />
                                        <img src={javascript} alt="..." />
                                        <img src={bootstrap} alt="..." />
                                        <img src={react} alt="..." />
                                        <img src={tailwind} alt="..." />
                                    </Carousel>
                                    <Carousel className='border-2 border-black'>
                                        <img src={laravel} alt="..." />

                                    </Carousel>
                                </div>
                            </div>
                        </section>

                        {/* section_4 projects */}
                        <section id='Projects' className=' flex flex-col items-center gap-y-10'>
                            <div>
                                <h1 className='test-font text-7xl font-extrabold'>PROJECTS</h1>
                            </div>

                            <div className='flex justify-center flex-wrap gap-10'>
                                <div className=' flex justify-center items-center w-[400px] h-[300px] text-white'>
                                    <a href="https://github.com/Theroysaad/Portfolio.git" target="_blank">
                                        <h1 className='test-font text-3xl font-extrabold uppercase'>Projet final react</h1>
                                    </a>
                                </div>
                                <div className=' flex justify-center items-center w-[400px] h-[300px]'>
                                    <a href="https://github.com/Youssef-faradi/React_Social_Media_App_Groupe-C.git" target='blank'>
                                        <h1 className='test-font text-3xl font-extrabold'>SOCIAL MEDIA</h1>
                                    </a>
                                </div>
                                <div className=' flex justify-center items-center w-[400px] h-[300px]'>
                                    <a href="https://github.com/Theroysaad/javascript_project_elghazy_saad.git" target='blank'>
                                        <h1 className='test-font text-3xl font-extrabold uppercase'>Projet final js</h1>
                                    </a>
                                </div>
                            </div>

                        </section>

                        {/* section_5 contact */}
                        <section className=' flex flex-col gap-y-10 justify-center items-center px-10'>

                            <div className='flex justify-center'>
                                <h1 className='test-font text-7xl font-extrabold'>LET'S CONNECT</h1>
                            </div>

                            <form className='flex flex-col gap-5 w-[50%] ' ref={form} onSubmit={sendEmail} >
                                <div className='flex flex-col gap-y-5 '>
                                    <input name="from_name" placeholder='Name' className='py-3 ps-7  rounded-sm outline-none  border-t-0' type="text" />
                                    <input name="from_email" placeholder='Email' className='py-3 ps-7  rounded-sm outline-none  border-t-0' type="email" />
                                    <textarea name="message" placeholder='Message' className='rounded-sm ps-7 pt-3 border-t-0' id="" cols="30" rows="5"></textarea>
                                </div>
                                <button type="submit" value="Send" className='uppercase bg-black text-white border lg:w-[10vw] border-none h-[7vh] rounded-full'>
                                    Send
                                </button>
                            </form>

                        </section>
                    </section>
                    {/* Side bar */}
                    <div className='w-[5%] flex flex-col justify-center gap-10 items-center fixed top-52 right-5'>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-[7vh] rounded-full border-2 border-black h-[7vh] flex justify-center items-center '>
                            <a href="https://github.com/Theroysaad" target='blank'>
                                <FaGithub />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-[7vh] rounded-full border-2 border-black h-[7vh] flex justify-center items-center'>
                            <a href="https://www.linkedin.com/in/saad-el-ghazy-7b29952b6" target='_blank'>
                                <FaLinkedinIn />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-[7vh] rounded-full border-2 border-black h-[7vh] flex justify-center items-center '>
                            <a href="https://web.facebook.com/saad.elghazy.1" target='blank'>
                                <FaFacebookF />
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className='w-[7vh] rounded-full border-2 border-black h-[7vh] flex justify-center items-center '>
                            <a href="https://www.instagram.com/elghazysaad/" target='blank'>
                                <FaInstagram />
                            </a>
                        </motion.div>
                    </div>
                    {/* Side bar */}

                </div>


            </section>



























        </>
    );
}
