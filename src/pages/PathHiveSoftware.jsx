// src/pages/PathHiveSoftware.jsx
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Modern Mindset Assessment", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 2, title: "PATH-HIVE Workshop Tool", img: "/assets/to-do-list.png" },
  { id: 3, title: "PATH-HIVE Maturity Assessment", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 4, title: "PATH-HIVE Values Assessment", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 5, title: "PATH-HIVE Skills Assessment", img: "/assets/to-do-list.png" , comingSoon: true},
  { id: 6, title: "PATH-HIVE Wellbeing Assessment", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 7, title: "Dilyn Way Leadership Journey", img: "/assets/to-do-list.png" , comingSoon: true},
  { id: 8, title: "PATH-HIVE Portfolio Prioritisation Tool", img: "/assets/to-do-list.png" , comingSoon: true},
  { id: 9, title: "PATH-HIVE Technical", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 10, title: "3+7 A's People Change Management", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 11, title: "PATH-HIVE AI", img: "/assets/to-do-list.png", comingSoon: true },
  { id: 12, title: "PATH-HIVE APIs", img: "/assets/to-do-list.png" , comingSoon: true},
];

export default function PathHiveSoftware() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F9F8] to-white text-gray-800">
      <Hero
        title="PATH-HIVE Software"
        subtitle="Redefining change and transformation management through an interdisciplinary approach"
        image="/assets/FitbetweenPeopleandProjects.png"
      />

      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <p className="text-lg leading-relaxed text-gray-700">
          The PATH-HIVE software represents a paradigm shift in change and transformation management,
          integrating insights from physics, business, technology, and human performance. It goes
          beyond traditional tools, supporting individuals and organizations in navigating change with
          clarity and confidence.
        </p>
      </section>

      {/* Explore Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-[#E8F5F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#004E59] mb-4">
            Explore Our <span className="text-[#00A6A6]">Tools & Assessments</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Powerful, research-backed tools designed to unlock your organization's potential and
            enable smarter transformation journeys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-[#004E59] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">The Workshop Experience</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-10">
            Experience how PATH-HIVE empowers organizations through intelligent, human-centered design and adaptive transformation practices.
          </p>

          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border border-[#00A6A6]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/33tQNHDSlpk"
              title="PATH-HIVE Workshop Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-[#003C46] text-white text-center py-8">
        <p className="tracking-wide font-medium">
          PATH-HIVE | TRANSFORMING ORGANIZATIONS
        </p>
      </footer>
    </div>
  );
}
