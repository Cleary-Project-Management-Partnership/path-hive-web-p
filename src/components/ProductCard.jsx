// src/components/ProductCard.jsx
export default function ProductCard({ title, img, comingSoon }) {
    const isDisable=comingSoon ? true : false;
    
  return (
    <div
      className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00A6A6]/40 ${
        comingSoon ? "opacity-80" : "opacity-100"
      }`}
    >
      {/* Icon Container */}
      <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-tr from-[#E8F5F2] to-white rounded-full shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
        <img src={img} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#004E59] group-hover:text-[#00A6A6] transition-colors leading-snug">
        {title}
      </h3>

      {/* Description (optional placeholder) */}
      <p className="text-sm text-gray-500 mt-3 max-w-xs">
        Gain insights, measure progress, and unlock your team’s potential with this intuitive tool.
      </p>

      {/* Badge or Button */}
      {comingSoon && (
        <span className="absolute top-4 right-4 bg-[#00A6A6] text-white text-xs font-medium py-1 px-3 rounded-full shadow-md">
          Coming Soon
        </span>
      )}
 <button 
 className={`mt-6 px-5 py-2.5 rounded-lg text-white transition-all duration-300 shadow-sm ${
    isDisable ? "bg-gray-400 cursor-not-allowed" : "bg-[#00A8A8] hover:bg-[#008F8F]"
  }`}
//  className="mt-6 px-5 py-2.5 bg-[#00A6A6] text-white rounded-xl hover:bg-[#008F8F] transition-all duration-300 shadow-sm hover:shadow-md" 
 disabled={isDisable}>
        {  comingSoon ? "Stay tuned" :"Learn More"}
        </button>
        
      {/* Decorative gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-[#00A6A6]/10 to-transparent pointer-events-none" />
    </div>
  );
}
