import React from 'react';
import ServiceItemCard from './ServiceItemCard';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
}

const WebDevelopmentContent = () => {
    const WebServiceItems = [
        {
            title: "Portfolio Website",
            desc: "Showcase your work with sleek, interactive designs",
            low: "20,000",
            high: "80,000",
            img: "/services/webdev/portfolioweb.png"
        },
        {
            title: "E-commerce Websites",
            desc: "Seamless online shopping experiences with secure payments",
            low: "50,000",
            high: "2,00,000",
            img: "/services/webdev/ecommweb.png"
        },
        {
            title: "Dedicated Management App",
            desc: "Automate and manage business processes with powerful dashboards",
            low: "1,20,000",
            high: "5,00,000",
            img: "/services/webdev/managementapp.png"
        },
        {
            title: "Custom Web Solutions",
            desc: "Tailored to your business needs, from concept to execution",
            low: "30,000",
            high: "1,50,000",
            img: "/services/webdev/customweb.png"
        },
        {
            title: "AI-Powered Interactive Websites",
            desc: "Intelligent UX enhancements for dynamic customer experiences",
            low: "70,000",
            high: "3,00,000",
            img: "/services/webdev/aiweb.png"
        },
    ]
    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 md:w-44 max-w-[150px] md:max-w-[450px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    We Engineer Digital Experiences that Convert & Engage
                </h4>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16  max-w-[150px] md:w-44 md:max-w-[450px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹20,000 - Custom quotes available based on features.
            </p>
            <motion.div
                className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {WebServiceItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceItemCard key={index} title={item.title} desc={item.desc} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

    )
}

const AutomationContent = () => {
    const AutomationServiceItems = [
        {
            title: "AI-Powered Assistance",
            desc: "Agentic AI to streamline workflows and decision-making",
            low: "60,000",
            high: "3,00,000",
            img: "/services/automation/aiassistance.png"
        },
        {
            title: "Business Process Automation",
            desc: "Eliminate manual workloads with custom automation pipelines",
            low: "50,000",
            high: "2,50,000",
            img: "/services/automation/bussinessauto.png"
        },
        {
            title: "AI-Driven Marketing Funnels",
            desc: "Precision targeting and conversion tracking",
            low: "40,000",
            high: "1,50,000",
            img: "/services/automation/marketingfunnels.png"
        },
        {
            title: "Customer Support Automation",
            desc: "Chatbots, AI assistants, and automated helpdesk solutions",
            low: "70,000",
            high: "3,50,000",
            img: "/services/automation/customersupport.png"
        },
        {
            title: "Predictive Analytics & Optimization",
            desc: "Data-driven insights to refine business operations",
            low: "40,000",
            high: "1,50,000",
            img: "/services/automation/analysis.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Smart Systems for Smarter Workflows
                </h4>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹50,000 - Scalable solutions available.
            </p>
            <motion.div
                className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {AutomationServiceItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceItemCard key={index} title={item.title} desc={item.desc} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

    )
}

const LeadGenerationContent = () => {
    const LeadServicesItems = [
        {
            title: "Growth Hacking Techniques",
            desc: "Proven tactics to scale engagement and conversions",
            low: "30,000",
            high: "1,00,000",
            img: "/services/leads/growth.png"
        },
        {
            title: "Performance-Based Marketing Optimization",
            desc: "Data-driven adjustments for max ROI",
            low: "40,000",
            high: "1,50,000",
            img: "/services/leads/performancemarketing.png"
        },
        {
            title: "Brand Positioning & Online Authority",
            desc: "Establish a strong digital presence",
            low: "50,000",
            high: "2,00,000",
            img: "/services/leads/branding.png"
        },
        {
            title: "AI-Enhanced Lead Funnels",
            desc: "Optimize lead acquisition through automation and analytics",
            low: "45,000",
            high: "1,80,000",
            img: "/services/leads/leadfunnel.png"
        },
        {
            title: "Retention & Loyalty Systems",
            desc: "Turn one-time visitors into long-term customers",
            low: "35,000",
            high: "1,20,000",
            img: "/services/leads/retention.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Maximize Digital Impact with Smart Strategies
                </h4>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starts at ₹30,000 - Custom growth plans available.
            </p>
            <motion.div
                className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {LeadServicesItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceItemCard key={index} title={item.title} desc={item.desc} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

    )
}

const MarketingAssistanceContent = () => {
    const MarketingServicesItem = [
        {
            title: "Cross-Platform Ads Setup",
            desc: "Google, Meta, LinkedIn, YouTube – all optimized for performance",
            low: "25,000",
            high: "1,20,000",
            img: "/services/marketing/ads.png"
        },
        {
            title: "High-Impact Campaign Designing & Management",
            desc: "Data-backed creative strategies",
            low: "40,000",
            high: "2,00,000",
            img: "/services/marketing/campaigndesign.png"
        },
        {
            title: "In-Depth Feedback Analysis & Improvement",
            desc: "Real-time analytics to fine-tune campaigns",
            low: "30,000",
            high: "1,50,000",
            img: "/services/marketing/feedback.png"
        },
        {
            title: "SEO & Online Optimization",
            desc: "Rank higher and dominate search results",
            low: "20,000",
            high: "1,00,000",
            img: "/services/marketing/seo.png"
        },
        {
            title: "AI-Powered Competitive Analysis",
            desc: "Stay ahead of the game with real-time insights",
            low: "35,000",
            high: "1,20,000",
            img: "/services/marketing/analysis.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Comprehensive 360° Marketing Strategies
                </h4>
                <motion.div initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }} className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px] md:w-44 md:max-w-[450px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹15,000 - Monthly plans available.
            </p>
            <motion.div
                className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {MarketingServicesItem.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceItemCard key={index} title={item.title} desc={item.desc} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

    )
}

export const accordionData = [
    {
        id: 'web-development',
        srNo: '01',
        title: 'WEB DEVELOPMENT',
        subtitle: 'Web development involves building websites and web apps, divided into frontend, backend, and full-stack development.',
        content: <WebDevelopmentContent />
    },
    {
        id: 'automation',
        srNo: '02',
        title: 'AUTOMATION',
        subtitle: 'Automation is the use of technology to perform tasks with minimal human intervention. It improves efficiency in industries like IT, manufacturing, and AI.',
        content: <AutomationContent />
    },
    {
        id: 'lead-generation',
        srNo: '03',
        title: 'LEAD GENERATION',
        subtitle: 'Lead generation is the process of attracting and capturing potential customers for a business. It uses strategies like content marketing, ads, SEO, and email campaigns.',
        content: <LeadGenerationContent />
    },
    {
        id: 'marketing-assistance',
        srNo: '04',
        title: 'MARKETING ASSISTANCE',
        subtitle: 'Marketing assistance is the support provided to businesses in planning, executing, and optimizing marketing strategies to enhance brand visibility and drive sales.',
        content: <MarketingAssistanceContent />
    }
]
