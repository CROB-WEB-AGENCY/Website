

const ServiceItemCard = ({ title, PriceLow, PriceHigh, Image }) => {

    return (
        <div className="flex flex-col justify-between w-full h-[200px] sm:h-56 md:h-68 min-w-40 sm:min-w-52 bg-[#39908D] rounded-2xl p-1">
            <div className="relative w-full h-4/10 sm:h-3/10 flex items-center justify-items-start px-2">
                <h1 className="font-inter text-sm md:text-xl font-light line-clamp-3 pr-8 md:pr-20">{title}</h1>
                <div className="absolute top-2 right-2 font-thin text-[9px] md:text-sm text-center">
                    <p className="p-1 border-b border-dashed ">{PriceLow}</p>
                    <p className="p-1">{PriceHigh}</p>
                </div>
            </div>
            <img src={Image} alt={Image} className="w-full h-6/10 sm:h-7/10 place-self-end p-0.5 md-p-1 rounded-xl" />
        </div>
    )
}

export default ServiceItemCard
