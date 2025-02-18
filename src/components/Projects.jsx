import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"

const Projects = () => {
    return (
        <section id='projects' className='mx-auto max-w-[1168px] h-screen text-black pt-20 px-6 lg:px-8 mb-24'>
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
                    What We’ve Been Up To
                </motion.h2>

                <motion.p
                    className="mx-auto max-w-[400px] mt-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    See how we’re shaping the future with our latest work.
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className='mx-auto w-full max-w-lg lg:max-w-[1168px] mt-16 grid grid-cols-1 gap-14 lg:mt-20 lg:mx-0 lg:grid-cols-12 lg:gap-7'>
                <div className='lg:col-span-6 w-[530px] h-80 bg-gray-300 rounded-md'></div>
                <div className='lg:col-span-6 w-full bg-gray-300 rounded-md'></div>
            </motion.div>
        </section>
    )
}

export default Projects