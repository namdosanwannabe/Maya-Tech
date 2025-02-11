import React from 'react'
import { motion } from 'motion/react'
import RightArrow from '../assets/icons/right-arrow-icon.svg'

const Hero = () => {
    return (
        <main className="relative mx-auto max-w-[1168px] h-screen text-black pt-24 flex items-center justify-center">
            <div className="grid-background absolute inset-0 opacity-80"></div>

            <div className="relative z-10 text-center">

                <h1 className="text-6xl font-normal">
                    Built to Launch
                    <span className='block text-primary'>
                        Designed to <span>{" "}</span>
                        <span className='relative'>
                            Scale
                            <svg width="195" height="77" viewBox="0 0 195 77" fill="none"
                                className="absolute -top-1 -left-4 bottom-0" xmlns="http://www.w3.org/2000/svg">

                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{
                                        duration: 1.25,
                                        ease: "easeInOut"
                                    }}
                                    d="M129 6C129 6 2 2.99985 1.49997 40C0.99995 77.0002 87 75.5 87 75.5C87 75.5 193.5 79 193.5 44.5C193.5 9.99998 23.5 1.5 23.5 1.5" stroke="#3FCF8E" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </span>
                </h1>

                <p className="mx-auto max-w-[600px] mt-6 text-lg font-medium">
                    We help you create stunning designs, custom software, responsive websites, high-conversion e-commerce solutions, and more.
                </p>

                <div className='cta-buttons mt-6 flex gap-6 items-center justify-center font-medium'>
                    <button type="button" className='px-8 py-4 rounded-full bg-primary-light flex gap-3 items-center justify-center border-2 border-primary-dark/75'>
                        Get in Touch
                        <img src={RightArrow} alt="Arrow Icon" />
                    </button>
                    <button type="button" className='px-8 py-4 rounded-full border-2 border-gray-light'>Learn More</button>
                </div>
            </div>
        </main>
    )
}

export default Hero