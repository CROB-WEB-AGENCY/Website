import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const spotlightData = [
  {
    title: "E-commerce Excellence",
    brand: "Puff Apparel",
    description:
      "Developed a high-performance e-commerce store with seamless checkout, AI-driven product recommendations, and an engaging UI to boost conversions.",
    image: "./icons/ec.png",
  },
  {
    title: "Portfolio Website",
    brand: "Simon Sparks, Creative Director",
    description:
      "A sleek and immersive portfolio site with motion graphics and interactive storytelling to showcase artistic projects.",
    image: "./icons/portfolioweb.png",
  },
  {
    title: "AI-Powered Management App",
    brand: "Donezol",
    description:
      "Built an AI-driven management platform featuring real-time analytics, automated reporting, and workflow automation.",
    image: "./icons/AI.png",
  },
  
];

function SpotlightFeature () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const handleNext = () => {
    if (currentIndex < spotlightData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="bg-[#BEBEBE33] rounded-4xl shadow-lg p-4 w-full text-left mt-8 ml-20 mr-20"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >  <div className="flex justify-between w-full">
      <motion.h2
        className="w-2/3 font-roboto text-[#120101] font-semibold text-2xl leading-[36px] tracking-normal drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {spotlightData[currentIndex].title}
      </motion.h2>
      
      <motion.p
        className="w-1/3 mt-2 -mr-2 font-roboto text-[#120101] font-semibold text-base leading-[36px] tracking-normal drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {spotlightData[currentIndex].brand}
      </motion.p>
      </div>
      <motion.p
        className="w-[73%] mt-6 font-roboto font-semibold text-lg leading-[27.5px] tracking-normal drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {spotlightData[currentIndex].description}
      </motion.p>
      <motion.button
        className="mt-6 border-2 border-black text-black font-medium font-roboto px-7 py-2 rounded-full flex items-center gap-2 shadow-[0px_4px_8.6px_0px_#C0B1FF] drop-shadow-[0px_4px_8.6px_0px_#C0B1FF]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        SEE MORE
      </motion.button>
      <motion.img
        src={spotlightData[currentIndex].image}
        alt="Spotlight"
        className="mt-15 w-full max-w-md rounded-lg mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      />
    <div className="flex justify-center items-center w-full mt-4 gap-10 ">
    {currentIndex > 0 && (<button
          onClick={handlePrev}
          className="w-10 h-10  flex items-center justify-center bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
    )}
       {currentIndex < spotlightData.length - 1 && (
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
       )}
      </div>
    </motion.div>
   
  );
};

export default SpotlightFeature;
