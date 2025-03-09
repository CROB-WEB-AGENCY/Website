import { Eye } from "lucide-react"
import { motion } from 'framer-motion'

export default function ProjectsDone() {
    const projects = [
        {
            img: '/services/webdev/managementapp.png',
            project: 'AI-Powered CRM ',
            company: 'Donzo',
            desc: 'Streamlined sales processes with 60% more efficiency',
            link: 'https://example.com',
        },
        {
            img: '/services/webdev/ecommweb.png',
            project: 'Ecommerce store',
            company: 'Puff Apparel',
            desc: 'Increased conversion rates by 45%.',
            link: 'https://example.com',
        },
        {
            img: '/services/webdev/portfolioweb.png',
            project: 'Portfolio Website',
            company: 'AlphaTech',
            desc: 'Reduced manual workload by 70% using AI-driven solutions.',
            link: 'https://example.com',
        },
        {
            img: '/services/webdev/ecommweb.png',
            project: 'Ecommerce store',
            company: 'Puff Apparel',
            desc: 'Increased conversion rates by 45%.',
            link: 'https://example.com',
        },
        {
            img: '/services/webdev/portfolioweb.png',
            project: 'Portfolio Website',
            company: 'AlphaTech',
            desc: 'Reduced manual workload by 70% using AI-driven solutions.',
            link: 'https://example.com',
        },
    ]

    const imageVariants = {
        hidden: (index) => ({
            x: index % 2 === 0 ? -100 : 100,
            y: 50,
            opacity: 0,
            rotate: index % 2 === 0 ? -10 : 10,
        }),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                duration: 0.8,
            }
        }
    };

    const contentVariants = {
        hidden: (index) => ({
            x: index % 2 === 0 ? 100 : -100,
            y: 30,
            opacity: 0,
            rotate: index % 2 === 0 ? 8 : -8,
        }),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: 0.2,
                duration: 0.8,
            }
        }
    };

    return (
        <div className=" min-h-screen h-fit w-full py-12 px-2 sm:px-6 md:px-8 relative overflow-hidden">

            {/* top right corner wala gradient */}
            <div className='absolute top-8 -right-2 md:-right-8 opacity-75 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-10 w-10 md:h-28 md:w-28 blur-md' />
            <div className='absolute  top-20 -right-12 md:-right-28 opacity-75 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-20 w-36 md:h-48 md:w-96 blur-md' />
            <div className='absolute top-24 -right-8 md:-right-12 opacity-75 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-28 w-20 md:h-72 md:w-48 blur-md' />

            {/* left top */}
            <div className='absolute top-20 left-9 opacity-25 bg-radial from-[#4ECDC4] via-65% via-transparent to-transparent h-20 w-20 md:h-48 md:w-48 blur-md' />

            {/* middle ones */}
            <div className='absolute top-56 left-1/3 opacity-65 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-12 w-12 md:h-24 md:w-24 blur-md' />
            <div className='absolute top-60 left-1/2 opacity-65 bg-radial from-[#CBABFF] via-65% via-transparent to-transparent h-12 w-12 md:h-24 md:w-24 blur-md' />

            {/* bottom right wala group */}
            <div className='absolute -bottom-2 -left-2 md:-left-8 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-10 w-10 md:h-28 md:w-28 blur-md' />
            <div className='absolute -bottom-8 -left-12 md:-left-28 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-20 w-36 md:h-48 md:w-96 blur-md' />
            <div className='absolute -bottom-12 -left-8 md:-left-12 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-28 w-20 md:h-72 md:w-48 blur-md' />

            {/* right bottom */}
            <div className='absolute bottom-20 right-9 opacity-45 bg-radial from-[#4ECDC4] via-65% via-transparent to-transparent h-20 w-20 md:h-48 md:w-48 blur-md' />

            <div className='relative w-full flex items-center justify-center mb-8 sm:mb-12'>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 sm:w-48 md:w-86 " />
                <h4 className="text-xl sm:text-2xl md:text-4xl text-center font-semibold px-4 w-[28ch] md:w-fit text-white font-manrope md:whitespace-nowrap">
                    Projects Done so Far
                </h4>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 sm:w-48 md:w-86" />
            </div>
            <div className="max-w-7xl mx-auto z-50">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center w-full mb-8 lg:mb-12 
                                   ${index % 2 === 0 ? "lg:flex-row" : "flex-row-reverse"}`}
                    >
                        <motion.div
                            className="w-2/3 lg:w-1/2 lg:px-6 mb-4 lg:mb-0"
                            custom={index}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img
                                src={project.img}
                                alt={`${project.project} by ${project.company}`}
                                className="w-full h-auto z-20 border-2 md:border-4 border-white rounded-3xl md:rounded-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </motion.div>
                        <motion.div
                            className="mx-1 p-2 sm:p-3 md:p-4 w-1/2 sm:w-1/2 h-auto sm:min-h-52 md:min-h-60 flex flex-col justify-between bg-white/10 rounded-2xl"
                            custom={index}
                            variants={contentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <h3 className="text-sm md:text-lg lg:text-xl font-normal text-white mb-1 md:mb-2">{project.project}</h3>
                                <p className="text-white text-[10px] sm:text-xs md:text-base line-clamp-2 opacity-90 pr-4 sm:pr-8 md:pr-16">{project.company}</p>
                                <p className="py-2 text-white text-[10px] sm:text-xs md:text-base line-clamp-3 md:line-clamp-4 opacity-90">
                                    {project.desc}
                                </p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                className="mt-2 px-2 py-1 md:px-3 md:py-1.5 w-fit flex items-center space-x-2 bg-white text-[10px] sm:text-xs md:text-sm text-black rounded-full hover:bg-white/90 transition-colors"
                            >
                                <Eye strokeWidth={2.5} size={16} /> <p>see live demo</p>
                            </a>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}