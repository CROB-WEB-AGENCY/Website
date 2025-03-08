import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './AccordionData'

const ServicesAccordion = () => {
    return (
        <div className="bg-black min-h-screen w-full py-12 px-2 sm:px-6 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none ">
                <div className=" w-40 h-40 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
                <div className="absolute top-1/4 right-0 w-60 h-60 rounded-full bg-cyan-500 blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-emerald-500 blur-3xl opacity-20"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <Accordion items={accordionData} />
            </div>
        </div>
    )
}

export default ServicesAccordion