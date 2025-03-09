import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="relative min-h-svh flex items-center justify-center bg-black overflow-hidden">
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 428 871"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                >
                    <defs>
                        <linearGradient id="opacityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <motion.stop
                                offset="0%"
                                stopColor="white"
                                initial={{ stopOpacity: 0 }}
                                animate={{ stopOpacity: 1 }}
                                transition={{ duration: 2 }}
                            />
                            <motion.stop
                                offset="20%"
                                stopColor="white"
                                initial={{ stopOpacity: 0 }}
                                animate={{ stopOpacity: 1 }}
                                transition={{ duration: 2, delay: 0.3 }}
                            />
                            <motion.stop
                                offset="100%"
                                stopColor="white"
                                initial={{ stopOpacity: 0 }}
                                animate={{ stopOpacity: 1 }}
                                transition={{ duration: 2, delay: 0.6 }}
                            />
                        </linearGradient>
                        <mask id="fadeMask">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#opacityGradient)" />
                        </mask>
                        <filter id="filter0_f_782_427" x="-104.7" y="0.299999" width="785.4" height="1029.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="21.35" result="effect1_foregroundBlur_782_427" />
                        </filter>
                    </defs>

                    <g opacity="0.54" filter="url(#filter0_f_782_427)" mask="url(#fadeMask)">
                        <path d="M638 987L342.458 470.702L225.889 327.989L131.103 222.373L-41.3944 43L60.4558 244.195L119.329 321.879L162.306 378.615L638 987Z" fill="#D9D9D9" fillOpacity="0.75" />
                        <path d="M310.784 654.44L-62 130.723L87.2431 392.581L277.226 695.9L310.784 654.44Z" fill="#D9D9D9" fillOpacity="0.75" />
                        <path d="M256.503 244.195L152.298 153.853L19.2448 64.385L499.06 543.15L510.246 456.736L256.503 244.195Z" fill="#D9D9D9" fillOpacity="0.75" />
                    </g>
                </motion.svg>
            </motion.div>
            <motion.div
                className="pt-14 sm:pt-28 relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            >
                <motion.img
                    src="/white_name_crob.png"
                    alt=""
                    className='h-12 sm:h-20 md:h-24 w-auto my-8 sm:my-3'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl tracking-widest font-inter text-nowrap mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                >
                    DESIGN . DEVELOP . DOMINATE .
                </motion.p>
                <motion.h2
                    className="text-lg sm:text-2xl md:text-5xl font-manrope font-bold mb-8 max-w-3xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    Innovation That Transforms Businesses.
                </motion.h2>
                <motion.p
                    className="text-md sm:text-lg md:text-xl font-manrope font-light max-w-2xl mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                >
                    At CROB, we don't just build websites or automate processes—we engineer digital
                    experiences that redefine industries.
                </motion.p>
                <motion.button
                    onClick={scrollToServices}
                    className="border-2 font-inter border-white rounded-full px-4 py-2 text-md font-medium transition-all hover:bg-white hover:text-black mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    Our Services
                </motion.button>
                <motion.div
                    className="animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroSection
