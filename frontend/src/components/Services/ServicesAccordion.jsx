import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './AccordionData'

const ServicesAccordion = () => {
    return (
        <div id='services' className="h-fit w-full py-12 px-2 sm:px-6 md:px-8 relative overflow-visible">
            {/* top right corner wala gradient */}
            <div className='absolute top-8 -right-2 md:-right-8 opacity-75 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-10 w-10 md:h-28 md:w-28 blur-md z-0' />
            <div className='absolute top-20 -right-12 md:-right-28 opacity-75 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-20 w-36 md:h-48 md:w-96 blur-md z-0' />
            <div className='absolute top-24 -right-8 md:-right-12 opacity-75 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-28 w-20 md:h-72 md:w-48 blur-md z-0' />

            {/* left top */}
            <div className='absolute top-20 left-9 opacity-25 bg-radial from-[#4ECDC4] via-65% via-transparent to-transparent h-20 w-20 md:h-48 md:w-48 blur-md z-0' />

            {/* middle ones */}
            <div className='absolute top-56 left-1/3 opacity-65 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-12 w-12 md:h-24 md:w-24 blur-md z-0' />
            <div className='absolute top-60 left-1/2 opacity-65 bg-radial from-[#CBABFF] via-65% via-transparent to-transparent h-12 w-12 md:h-24 md:w-24 blur-md z-0' />

            <div className='absolute bottom-56 left-1/4 opacity-55 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-10 w-10 md:h-28 md:w-28 blur-md z-0' />
            <div className='absolute bottom-40 left-1/4 opacity-55 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-20 w-36 md:h-48 md:w-96 blur-md z-0' />

            {/* bottom right wala group - extending beyond the component */}
            <div className='absolute -bottom-20 -left-2 md:-left-8 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-10 w-10 md:h-28 md:w-28 blur-md z-0' />
            <div className='absolute -bottom-32 -left-12 md:-left-28 bg-radial from-[#99C5FF] via-65% via-transparent to-transparent h-20 w-36 md:h-48 md:w-96 blur-md z-0' />
            <div className='absolute -bottom-40 -left-8 md:-left-12 bg-radial from-white via-5% via-[#CBABFF] to-60% to-transparent h-28 w-20 md:h-72 md:w-48 blur-md z-0' />

            {/* right bottom */}
            <div className='absolute -bottom-16 right-9 opacity-45 bg-radial from-[#4ECDC4] via-65% via-transparent to-transparent h-20 w-20 md:h-48 md:w-48 blur-md z-0' />

            <div className="relative z-10 max-w-4xl mx-auto">
                <Accordion items={accordionData} />
            </div>
        </div>
    )
}

export default ServicesAccordion