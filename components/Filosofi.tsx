import { PHILOSOPHY } from '@/lib/constants'
import { Zap, Eye, Puzzle, Handshake } from 'lucide-react'

const PHILOSOPHY_ICONS = [Zap, Eye, Puzzle, Handshake]

export default function Filosofi() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Filosofi Kami
          </span>
          <h2 className="section-title">Filosofi Kami</h2>
          <p className="section-subtitle mx-auto">
            Kami percaya bahwa layanan rental kendaraan bukan hanya soal menyediakan armada, tetapi juga tentang menjaga kelancaran operasional pelanggan.
          </p>
        </div>

        {/* Philosophy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-primary-100">
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
              Karena itu, BGT Rent mengutamakan <strong className="text-primary-600">keandalan kendaraan</strong>,{' '}
              <strong className="text-primary-600">komunikasi yang jelas</strong>,{' '}
              <strong className="text-primary-600">pelayanan yang responsif</strong>, dan{' '}
              <strong className="text-primary-600">hubungan kerja jangka panjang</strong>.
            </p>

            {/* Principles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {PHILOSOPHY.map((item, index) => {
                const IconComponent = PHILOSOPHY_ICONS[index]
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
