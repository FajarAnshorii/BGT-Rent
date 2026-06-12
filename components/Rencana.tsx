import { DEVELOPMENT_PLAN } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'

export default function Rencana() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Rencana Pengembangan
          </span>
          <h2 className="section-title">Rencana Pengembangan</h2>
          <p className="section-subtitle mx-auto">
            Rencana pengembangan BGT Rent dibuat realistis untuk menjaga pertumbuhan bisnis tetap sehat
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-6">
            <p className="text-lg text-gray-700 italic">
              "Kami memilih tumbuh realistis dan sehat, bukan sekadar besar di awal tetapi tidak stabil."
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {DEVELOPMENT_PLAN.map((plan, index) => (
                <div
                  key={plan.phase}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow inline-block">
                      <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-3">
                        {plan.phase}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.title}</h3>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
