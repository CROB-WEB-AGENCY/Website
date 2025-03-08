import { useState, useCallback } from "react";
import HeroSection from "../components/Services/HeroSection"
import Header from "../components/Homepage/Header"
import ServicesAccordion from "../components/Services/ServicesAccordion";

export default function ServicesPage() {
    const [isOpen, setIsOpen] = useState(false);

    const togglenavbar = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <div className="h-full w-full">
            <Header isOpen={isOpen} togglenavbar={togglenavbar} />
            <HeroSection />
            <ServicesAccordion />
        </div>
    )
}