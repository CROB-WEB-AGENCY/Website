import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({ items, allowMultiple = false }) => {
    const [openItems, setOpenItems] = useState([])

    const toggleAccordion = (id) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(id)
                    ? prev.filter(item => item !== id)
                    : [...prev, id]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(id) ? [] : [id]
            )
        }
    }

    return (
        <div className="w-full bg-transparent">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    srNo={item.srNo}
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                    isOpen={openItems.includes(item.id)}
                    toggleAccordion={() => toggleAccordion(item.id)}
                />
            ))}
        </div>
    )
}

export default Accordion
