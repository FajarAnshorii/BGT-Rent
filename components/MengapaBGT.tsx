import { WHY_CHOOSE_US } from '@/lib/constants'
import { CheckCircle2, LucideIcon } from 'lucide-react'

const WHY_ICONS: LucideIcon[] = [
  CheckCircle2,
  CheckCircle2,
  CheckCircle2,
  CheckCircle2,
  CheckCircle2,
  CheckCircle2,
]

export default function MengapaBGT() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="section-title">Mengapa Memilih BGT Rent?</h2>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = WHY_ICONS[index]
              return (
                <div
                  key={item.title}
                  className="card group hover:shadow-lg hover:border-primary-200 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
