import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Play, Users, Clock, Target, Zap, Shield, Star } from "lucide-react";

const PRODUCTS = {
  "2": {
    title: "PATH-HIVE Workshop Tool",
    subtitle: "Transform Your Workshop Experience",
    price: "Upon inquiry",
    tagline: "The Ultimate Engine to Plan, Facilitate & Execute Project Workshops with Precision.",
    description: `Eliminate the chaos of traditional workshops. PATH-HIVE Workshop Tool is your comprehensive solution for planning, facilitating, and executing high-impact project workshops that drive real results. With an intuitive interface and enterprise-grade features, you'll transform scattered discussions into structured, actionable outcomes.`,
    keyFeatures: [
      {
        icon: Target,
        title: "Structured Planning",
        description: "Pre-built templates and frameworks ensure every workshop has clear objectives and outcomes"
      },
      {
        icon: Users,
        title: "Collaborative Facilitation",
        description: "Real-time collaboration tools keep everyone engaged and aligned throughout the session"
      },
      {
        icon: Clock,
        title: "Time Efficiency",
        description: "Cut workshop preparation time by 70% with automated agenda building and resource management"
      },
      {
        icon: Zap,
        title: "Instant Documentation",
        description: "Automatic capture of decisions, action items, and insights - no more manual note-taking"
      }
    ],
    benefits: [
      {
        title: "Eliminate External Costs",
        description: "Save thousands by removing the need for external facilitators or professional note-takers",
        metric: "70% cost reduction"
      },
      {
        title: "Accelerate Project Launch",
        description: "Get projects off the ground faster with structured, productive workshops that drive decision-making",
        metric: "3x faster alignment"
      },
      {
        title: "Maintain Team Focus",
        description: "Keep discussions on track with built-in agendas, timers, and reference materials at your fingertips",
        metric: "90% goal achievement"
      },
      {
        title: "Scale Workshop Excellence",
        description: "Empower any team member to facilitate professional workshops without specialized training",
        metric: "Universal adoption"
      },
      {
        title: "Clear Communication",
        description: "Break down complex concepts without project jargon - everyone stays on the same page",
        metric: "100% clarity"
      },
      {
        title: "Proven Results",
        description: "Join organizations achieving measurably better project outcomes through structured collaboration",
        metric: "Trusted by leaders"
      }
    ],
    testimonial: {
      quote: "The Workshop Tool transformed how we kick off projects. What used to take weeks of planning now happens in days, and the results are significantly better.",
      author: "Sarah Mitchell",
      role: "Director of PMO",
      company: "Global Tech Solutions"
    },
    image: "/assets/to-do-list.png",
    video: "https://www.youtube.com/embed/33tQNHDSlpk",
  },
};

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h2>
          <p className="text-slate-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                <span className="text-sm font-medium text-cyan-100">Enterprise-Grade Solution</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-100 mb-8 leading-relaxed">
                {product.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button  onClick={() => window.open('https://youtu.be/33tQNHDSlpk', '_blank')} className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2">
                  {/* <Play className="w-5 h-5" /> */}
                  Watch Video
                </button>
              </div>

              <div className="flex items-center gap-8 text-cyan-100">
                <div>
                  <div className="text-3xl font-bold text-white">{product.price}</div>
                  <div className="text-sm">One-time investment</div>
                </div>
                <div className="h-12 w-px bg-cyan-400/30"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm">30-day money-back guarantee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 rounded-xl px-6 py-3 shadow-xl">
                  <div className="text-sm text-white font-medium">70% Cost Reduction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Used by 500+ organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>4.9/5 customer rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>ISO 27001 certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Workshop Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {product.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 h-full border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-slate-600">
              Transform how your organization runs workshops
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-slate-300">Watch how leading organizations transform their workshops</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-500/30">
              <iframe
                width="100%"
                height="100%"
                src={product.video}
                title={product.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
              "{product.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-bold text-xl">{product.testimonial.author}</div>
              <div className="text-cyan-100">{product.testimonial.role}, {product.testimonial.company}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Workshops?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join hundreds of organizations already running more effective workshops with PATH-HIVE
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                Schedule Your Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-slate-100 text-slate-900 text-lg font-semibold rounded-xl hover:bg-slate-200 transition-all duration-200">
                Request Pricing
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}