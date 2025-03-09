import { ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom'

export default function Book() {
  const navigate = useNavigate()
  return (
    <div className="bg-black text-white px-10 py-6 rounded-t-4xl w-full space-y-4 -mb-1 relative border border-gray-800 "
      style={{
        backgroundImage: `
                radial-gradient(circle at 1px 1px, #44403C 1px, transparent 0)
                `,
        backgroundSize: "8px 8px",
      }}>

      <div className="flex -space-x-1 mt-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-blue-500 rounded-full border-2 border-black overflow-hidden"
          >
            <img
              src="./icons/Booking.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className=" w-5/6 text-2xl font-normal leading-tight font-Roboto">
        CHOOSE A CREATIVE SOLUTION FOR YOUR BUSINESS NOW, STAND OUT!
      </h2>


      <div className=" mt-25">
        <button onClick={() => navigate('/contactus')} className="flex items-center justify-between w-full bg-white text-black px-4 py-1 rounded-full font-semibold ">
          BOOK A CALL
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-black ">
            <ArrowUpRight className="w-7 h-7 text-white stroke-[3]" />
          </div>
        </button>
        <button onClick={() => navigate('/aboutus')} className="w-full border-2 border-white text-white px-4 py-2 mt-4 mb-12 rounded-full ">
          KNOW MORE
        </button>
      </div>
    </div>
  );
}
