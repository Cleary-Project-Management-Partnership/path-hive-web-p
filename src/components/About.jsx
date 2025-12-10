
import React, { useState } from 'react';
import { 
  Mail, Phone, Linkedin, ExternalLink, MapPin, Clock, 
  Send, User, MessageSquare, CheckCircle, Target, Users, 
  TrendingUp, Award, Globe, Heart, Lightbulb, Shield
} from 'lucide-react';

// ============================================
// ABOUT US PAGE
// ============================================
export function AboutPage() {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '17', label: 'International Experts' },
    { number: '10', label: 'Nationalities' },
    { number: '70%', label: 'Initiatives Fail Without Clarity' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Clarity First',
      description: 'We believe transformation begins with clear understanding, not complex tools.'
    },
    {
      icon: Users,
      title: 'Human-Centred',
      description: 'Change happens through people, not to them. We put humans at the heart of every initiative.'
    },
    {
      icon: TrendingUp,
      title: 'Build Capability',
      description: 'We empower organisations to own their transformation, not outsource it.'
    },
    {
      icon: Shield,
      title: 'Sustainable Impact',
      description: 'We focus on lasting change that organisations can sustain long after we\'re gone.'
    }
  ];

  const differentiators = [
    'Strategic alignment and readiness',
    'Human-centred participation and trust',
    'Capability building and internal ownership',
    'Behavioural adoption and long-term sustainability'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Cleary Premium & PATH-HIVE
            </h1>
            <p className="text-2xl lg:text-3xl text-cyan-100 mb-8 leading-relaxed font-light">
              Empowering Change From Within — through clarity, balance, and human connection
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded by <strong>Dr. Ashraf Bocktor (PhD, MBA)</strong>, Cleary Premium Project Management Solutions Partnership is the home of <strong>PATH-HIVE™</strong> — a people-centred transformation framework that helps organisations build lasting capability, reduce dependence on external consultants, and lead strategic initiatives with clarity and confidence.
              </p>

              <p>
                With 20+ years of experience leading complex change across energy, finance, education, and multi-sector environments, Ashraf witnessed a persistent global challenge: Despite enormous investment, <strong>70% of transformation initiatives still fail</strong> — not because of tools or methodologies, but because organisations often lack clarity, internal capability, and alignment from the very start.
              </p>

              <p>
                In response, he brought together a <strong>17-member international consortium</strong> — experts in transformation, coaching, innovation, regulation, behavioural psychology, technology, and leadership — representing 10 nationalities and 10 languages. Together, they co-created PATH-HIVE™, blending structured delivery principles with deep human insight.
              </p>

              <p>
                What began as <em>Clear & Pragmatic Project Management Solutions</em> evolved — not just in name but in purpose — into <strong>Cleary Premium</strong>, reflecting both clarity of thought and the heritage of the clerk and the scribe: The record-keepers. The wisdom carriers. The stewards of meaningful transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes PATH-HIVE Different */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes PATH-HIVE™ Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PATH-HIVE™ is not just a framework — it is an ecosystem for organisational clarity, capability, and readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <p className="text-2xl lg:text-3xl font-medium leading-relaxed">
              Rather than imposing change, PATH-HIVE™ helps organisations <strong>awaken change from within</strong>, ensuring transformation is not only delivered — but sustained.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Tool Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Introducing: The Cleary Due Diligence Tool</h2>
            <p className="text-xl text-cyan-100">
              A simple yet powerful digital gateway that prepares organisations before they launch strategic initiatives
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">The tool helps leaders and stakeholders:</h3>
            <div className="space-y-4 mb-8">
              {[
                'Reveal where clarity is missing — before complexity begins',
                'Assess readiness for strategic initiatives',
                'Support better decision-making at the very start'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-cyan-50">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-cyan-100 leading-relaxed">
              The tool uses structured baseline questions that all key stakeholders contribute to — creating shared understanding, alignment, and direction before planning, investing, or mobilising resources. Built on PATH-HIVE™ principles, it delivers <strong className="text-white">actionable clarity</strong> — not just insights.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            We believe transformation is not something that happens <em>to</em> people — it happens <strong>through</strong> people.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            When strategy meets humanity, and clarity meets capability, organisations don't just manage change — they <strong>grow from it</strong>.
          </p>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-12 h-12 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Looking Ahead</h2>
            </div>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Cleary Premium is shaping a future where organisations <strong>no longer outsource transformation</strong> — they own it, live it, and sustain it.
              </p>
              <p>
                Where projects don't just deliver outcomes — they build <strong>capability, alignment, and legacy</strong>.
              </p>
              <p>
                Where the role of transformation is not just to implement — but to <strong>empower</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform With Clarity?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Let's discuss how PATH-HIVE™ can help your organisation build lasting capability
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
