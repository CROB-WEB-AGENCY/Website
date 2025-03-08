import React from 'react';
import ServiceItemCard from './ServiceItemCard';

const WebDevelopmentContent = () => {
    const WebServiceItems = [
        {
            title: "Portfolio Website",
            low: "20,000",
            high: "80,000",
            img: "/services/webdev/portfolioweb.png"
        },
        {
            title: "E-commerce Websites",
            low: "50,000",
            high: "2,00,000",
            img: "/services/webdev/ecommweb.png"
        },
        {
            title: "Dedicated Management App",
            low: "1,20,000",
            high: "5,00,000",
            img: "/services/webdev/managementapp.png"
        },
        {
            title: "Custom Web Solutions",
            low: "30,000",
            high: "1,50,000",
            img: "/services/webdev/customweb.png"
        },
        {
            title: "AI-Powered Interactive Websites",
            low: "70,000",
            high: "3,00,000",
            img: "/services/webdev/aiweb.png"
        },
    ]
    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <div className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    We Engineer Digital Experiences that Convert & Engage
                </h4>
                <div className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹20,000 - Custom quotes available based on features.
            </p>
            <div className='pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6'>
                {WebServiceItems.map((item, index) => (
                    <ServiceItemCard key={index} title={item.title} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                ))}
            </div>
        </div>

    )
}

const AutomationContent = () => {
    const AutomationServiceItems = [
        {
            title: "AI-Powered Assistance",
            low: "60,000",
            high: "3,00,000",
            img: "/services/automation/aiassistance.png"
        },
        {
            title: "Business Process Automation",
            low: "50,000",
            high: "2,50,000",
            img: "/services/automation/bussinessauto.png"
        },
        {
            title: "AI-Driven Marketing Funnels",
            low: "40,000",
            high: "1,50,000",
            img: "/services/automation/marketingfunnels.png"
        },
        {
            title: "Customer Support Automation",
            low: "70,000",
            high: "3,50,000",
            img: "/services/automation/customersupport.png"
        },
        {
            title: "Predictive Analytics & Optimization",
            low: "40,000",
            high: "1,50,000",
            img: "/services/automation/analysis.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <div className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Smart Systems for Smarter Workflows
                </h4>
                <div className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹50,000 - Scalable solutions available.
            </p>
            <div className='pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6'>
                {AutomationServiceItems.map((item, index) => (
                    <ServiceItemCard key={index} title={item.title} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                ))}
            </div>
        </div>

    )
}

const LeadGenerationContent = () => {
    const LeadServicesItems = [
        {
            title: "Growth Hacking Techniques",
            low: "30,000",
            high: "1,00,000",
            img: "/services/leads/growth.png"
        },
        {
            title: "Performance-Based Marketing Optimization",
            low: "40,000",
            high: "1,50,000",
            img: "/services/leads/performancemarketing.png"
        },
        {
            title: "Brand Positioning & Online Authority",
            low: "50,000",
            high: "2,00,000",
            img: "/services/leads/branding.png"
        },
        {
            title: "AI-Enhanced Lead Funnels",
            low: "45,000",
            high: "1,80,000",
            img: "/services/leads/leadfunnel.png"
        },
        {
            title: "Retention & Loyalty Systems",
            low: "35,000",
            high: "1,20,000",
            img: "/services/leads/retention.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <div className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Maximize Digital Impact with Smart Strategies
                </h4>
                <div className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starts at ₹30,000 - Custom growth plans available.
            </p>
            <div className='pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6'>
                {LeadServicesItems.map((item, index) => (
                    <ServiceItemCard key={index} title={item.title} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                ))}
            </div>
        </div>

    )
}

const MarketingAssistanceContent = () => {
    const MarketingServicesItem = [
        {
            title: "Cross-Platform Ads Setup",
            low: "25,000",
            high: "1,20,000",
            img: "/services/marketing/ads.png"
        },
        {
            title: "High-Impact Campaign Designing & Management",
            low: "40,000",
            high: "2,00,000",
            img: "/services/marketing/campaigndesign.png"
        },
        {
            title: "In-Depth Feedback Analysis & Improvement",
            low: "30,000",
            high: "1,50,000",
            img: "/services/marketing/feedback.png"
        },
        {
            title: "SEO & Online Optimization",
            low: "20,000",
            high: "1,00,000",
            img: "/services/marketing/seo.png"
        },
        {
            title: "AI-Powered Competitive Analysis",
            low: "35,000",
            high: "1,20,000",
            img: "/services/marketing/analysis.png"
        },
    ]

    return (
        <div className="py-4">
            <div className='relative w-full flex items-center justify-center'>
                <div className="absolute bottom-3 left-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
                <h4 className="text-xl text-center font-semibold px-4 w-[28ch] md:w-fit font-manrope md:whitespace-nowrap">
                    Comprehensive 360° Marketing Strategies
                </h4>
                <div className="absolute bottom-3 right-0 flex-1 h-0.5 rounded-full bg-white drop-shadow-lg w-16 max-w-[150px]" />
            </div>
            <p className="mt-4 px-3 font-thin font-inter text-md text-left">
                Pricing: Starting at ₹15,000 - Monthly plans available.
            </p>
            <div className='pt-8 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6'>
                {MarketingServicesItem.map((item, index) => (
                    <ServiceItemCard key={index} title={item.title} PriceLow={item.low} PriceHigh={item.high} Image={item.img} />
                ))}
            </div>
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
];
