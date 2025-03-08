import { motion } from "framer-motion";
import { useState,useEffect } from "react";

export default function HeroPanel({ isOpen }) {
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setHasRendered(true);
  }, []);

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-white  min-h-screen transition-all duration-500
      ${isOpen ? "backdrop-blur-lg brightness-50" : ""}`}
    >
      <div className="absolute inset-0 bg-[url('./icons/background1.png')] bg-cover bg-center min-h-screen"></div>
      {!isOpen && (
        <>
          <motion.div
           initial={!hasRendered ? { opacity: 0, y: 50 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start justify-start w-full absolute top-[30%]  px-6 sm:px-12"
          >
            <img src="./icons/crob.png" alt="CROB Logo" className="w-32 sm:w-40 md:w-48 lg:w-56" />
            <p className="text-lg md:text-2xl font-light uppercase tracking-widest opacity-80 font-sans">
              DESIGN. DEVELOP. DOMINATE.
            </p>
          </motion.div>

          <motion.div
           initial={!hasRendered ? { opacity: 0, y: 50 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg sm:text-lg md:text-xl opacity-90 absolute top-[45%] sm:top-[50%] px-6 sm:px-12  self-start text-left font-monospace shadow-[0px_4px_4px_rgba(255, 255, 255, 1)]"
          >
            Crafts stunning websites and delivery<br /> expert digital marketingsolutions to help <br /> businesses grow.
          </motion.div>

          <motion.button
              href="#"
              initial={!hasRendered?{ opacity: 0, y: 5 }: {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}       
             className="absolute top-[70%] sm:top-[75%] self-start px-6 py-2 sm:px-8 sm:py-3 ml-10 sm: text-sm sm:text-lg font-semibold border-2 border-white rounded-full bg-[#222121]/20 shadow-[0px_4px_5.5px_rgba(255, 255, 255, 1)] transition"
          >
            KNOW MORE
          </motion.button>
        </>
      )}
    </section>
  );
}
