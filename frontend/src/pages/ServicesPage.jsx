import { useState, useCallback } from "react";
import HeroSection from "../components/Services/HeroSection"
import Header from "../components/Homepage/Header"
import ServicesAccordion from "../components/Services/ServicesAccordion";
import ProjectsDone from "../components/Services/ProjectsDone";
import Book from "../components/Homepage/Book";
import Footer from "../components/Homepage/Footer";

export default function ServicesPage() {
    const [isOpen, setIsOpen] = useState(false);

    const togglenavbar = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <div className="h-full w-full overflow-hidden bg-black">
            <Header isOpen={isOpen} togglenavbar={togglenavbar} />
            <HeroSection />
            <ServicesAccordion />
            <ProjectsDone />
            <Book />
            <Footer />
        </div>
    )
}