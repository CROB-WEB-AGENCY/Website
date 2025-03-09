import React from 'react';
import { Plus } from 'lucide-react'

const AccordionItem = ({ srNo, title, subtitle, content, isOpen, toggleAccordion }) => {
    return (
        <div className="border-b border-white/20 py-8 relative">
            <div
                className="flex items-start justify-between cursor-pointer px-2"
                onClick={toggleAccordion}
            >
                <div className="flex items-center">
                    <div className="text-4xl md:text-6xl font-bold font-ribeyee text-white opacity-90 mr-6 leading-none">
                        {srNo}
                    </div>
                    <div className='font-inter'>
                        <h3 className="text-xl md:text-2xl font-semibold text-white uppercase mb-2">
                            {title}
                        </h3>
                        <p className="text-white text-sm md:text-base line-clamp-2 opacity-90 pr-8 md:pr-16">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <button
                    className="text-white p-1 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                    <Plus size={32} />
                </button>
            </div>

            <div
                className="overflow-hidden transition-all duration-300 mt-4"
                style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden'
                }}
            >
                <div className=" text-white">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
