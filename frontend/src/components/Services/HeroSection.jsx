import React from 'react'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 428 871" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <g opacity="0.54" filter="url(#filter0_f_782_427)">
                        <path d="M638 987L342.458 470.702L225.889 327.989L131.103 222.373L-41.3944 43L60.4558 244.195L119.329 321.879L162.306 378.615L638 987Z" fill="#D9D9D9" fillOpacity="0.75" />
                        <path d="M310.784 654.44L-62 130.723L87.2431 392.581L277.226 695.9L310.784 654.44Z" fill="#D9D9D9" fillOpacity="0.75" />
                        <path d="M256.503 244.195L152.298 153.853L19.2448 64.385L499.06 543.15L510.246 456.736L256.503 244.195Z" fill="#D9D9D9" fillOpacity="0.75" />
                    </g>
                    <defs>
                        <filter id="filter0_f_782_427" x="-104.7" y="0.299999" width="785.4" height="1029.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="21.35" result="effect1_foregroundBlur_782_427" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
                <img src="" alt="" />
                <p className="text-xl tracking-widest mb-16">
                    DESIGN <span className="mx-2">.</span>
                    DEVELOP <span className="mx-2">.</span>
                    DOMINATE <span className="mx-2">.</span>
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
                    Innovation That Transforms Businesses.
                </h2>
                <p className="text-xl max-w-2xl mb-16">
                    At CROB, we don't just build websites or automate processes—we engineer digital
                    experiences that redefine industries.
                </p>
                <button className="border-2 border-white rounded-full px-8 py-3 text-lg font-medium transition-all hover:bg-white hover:text-black mb-12">
                    Discover Our Story
                </button>
                <div className="absolute bottom-8 animate-bounce">
                    <ChevronDown size={32} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection