import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ServiceItemCard = ({ title, desc, PriceLow, PriceHigh, Image }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile);
    }, [])

    const handleClick = () => {
        if (isMobile) {
            setIsFlipped(!isFlipped)
        }
    }

    const handleHoverStart = () => {
        if (!isMobile) {
            setIsFlipped(true)
        }
    }

    const handleHoverEnd = () => {
        if (!isMobile) {
            setIsFlipped(false)
        }
    }

    return (
        <motion.div
            className="relative flex flex-col justify-between w-full h-[200px] sm:h-56 md:h-68 min-w-40 sm:min-w-52 bg-[#39908D] rounded-2xl p-1 overflow-hidden cursor-pointer"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={handleClick}
        >
            <div className="relative w-full h-4/10 sm:h-3/10 flex items-center justify-items-start px-2">
                <h1 className="font-inter text-sm md:text-xl font-light line-clamp-3 pr-8 md:pr-20">{title}</h1>
                <div className="absolute top-2 right-2 font-thin text-[9px] md:text-sm text-center">
                    <p className="p-1 border-b border-dashed">{PriceLow}</p>
                    <p className="p-1">{PriceHigh}</p>
                </div>
            </div>
            <motion.div
                className="relative w-full h-6/10 sm:h-7/10 place-self-end rounded-xl"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={Image}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    style={{ backfaceVisibility: "hidden" }}
                />

                {isFlipped && (
                    <div className="absolute inset-0 bg-black/70 flex flex-col justify-end items-center text-white text-sm p-2 rounded-xl rotate-y-180">
                        <p className="text-xs sm:text-sm text-left">{desc}</p>
                    </div>
                )}
            </motion.div>

            {isMobile && (
                <div className="absolute bottom-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-white text-xs">
                    <span>{isFlipped ? '×' : 'i'}</span>
                </div>
            )}
        </motion.div>
    )
}

export default ServiceItemCard