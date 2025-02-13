import React, { useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

import ExpIcon from '../assets/icons/expertise-icon.svg';
import CollabIcon from '../assets/icons/collab-icon.svg';
import InnovIcon from '../assets/icons/innov-icon.svg';
import HeroImage from '../assets/icons/what-we-do-hero-image.png';

const WhatWeDo = () => {

    return (
        <section id='what-we-do' className='mx-auto max-w-[1168px] h-screen text-black pt-6 px-6 lg:px-8'>
            <motion.div
                className='w-full flex flex-col items-center justify-center text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className='text-4xl'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    Your
                    <span>{" "}</span>
                    <span className='relative inline-block'>
                        trusted
                        <svg className='absolute left-1/2 transform -translate-x-1/2 -bottom-1' width="174" height="9" viewBox="0 0 174 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{
                                    duration: 1.25,
                                    ease: "easeInOut",
                                    delay: 0.4
                                }}
                                d="M2.00003 7.28297C67.3154 0.26559 104.582 0.212483 172.244 7.28297"
                                stroke="#3FCF8E"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <span>{" "}</span>
                    digital solutions partner
                </motion.h2>

                <motion.p
                    className="mx-auto max-w-[600px] mt-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    We collaborate with you, providing updates to ensure smooth progress and the right solutions.
                </motion.p>
            </motion.div>

            <div className='mx-auto max-w-lg lg:max-w-[1168px] mt-16 grid gap-14 lg:mt-20 lg:mx-0 lg:grid-cols-12 lg:gap-7'>
                <motion.div
                    className='lg:col-span-5'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <ul className='relative'>
                        {[
                            { icon: ExpIcon, title: "Expertise" },
                            { icon: CollabIcon, title: "Collaboration" },
                            { icon: InnovIcon, title: "Innovation" }
                        ].map((item, index) => (
                            <motion.li
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className='relative pb-24 lg:pb-20'>
                                    {index !== 2 && (
                                        <span className="absolute top-24 left-11 bottom-4 -ml-1 border border-dashed border-gray-300" aria-hidden="true"></span>
                                    )}
                                    <div className='relative flex space-x-10'>
                                        <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center'>
                                            <img src={item.icon} className='w-8 h-8' alt={item.title} />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-xl font-medium'>{item.title}</h3>
                                            <p className='text-base text-gray-muted leading-7 mt-3 tracking-wide'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet arcu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                    className='lg:col-span-7 lg:pl-8 xl:pl-24'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className='relative'>
                        <img className='rounded-2xl shadow-[0px_4px_40px_rgba(0,0,0,0.1)]' src={HeroImage} alt="Table with Laptop" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-auto absolute rounded-2xl left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 p-10 bg-primary/75 text-white backdrop-blur-sm flex gap-8">
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <p className='text-4xl font-extrabold'>2+</p>
                                <p className='text-sm font-semibold whitespace-nowrap'>Years of experience</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <p className='text-4xl font-extrabold'>50+</p>
                                <p className='text-sm font-semibold whitespace-nowrap'>Projects delivered</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhatWeDo