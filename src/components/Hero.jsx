// src/components/Hero.jsx
export default function Hero({ title, subtitle, image }) {
  return (
    <section className="bg-gradient-to-br from-[#004E59] to-[#00A8A8] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg opacity-90 leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
