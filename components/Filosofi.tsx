import Image from 'next/image'
import { PHILOSOPHY } from '@/lib/constants'
import { Zap, Eye, Puzzle, Handshake } from 'lucide-react'

const PHILOSOPHY_ICONS = [Zap, Eye, Puzzle, Handshake]

export default function Filosofi() {
  return (
    <section className="section-padding bg-gradient-to-r from-white via-primary-50 to-primary-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Main Content Wrapper (shifted to right on desktop) */}
        <div className="relative max-w-4xl mx-auto lg:ml-auto lg:mr-0 lg:max-w-3xl xl:max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12 relative z-20">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Filosofi Kami
            </span>
            <h2 className="section-title">Filosofi Kami</h2>
            <p className="section-subtitle mx-auto">
              Kami percaya bahwa layanan rental kendaraan bukan hanya soal menyediakan armada, tetapi juga tentang menjaga kelancaran operasional pelanggan.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-10 lg:pl-40 lg:pr-12 lg:py-12 shadow-lg border border-primary-100 relative z-20">
            {/* Peeking Truck */}
            <div className="absolute left-[-380px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] hidden lg:block pointer-events-none select-none z-10">
              <Image
                src="/images/truck-peek.png"
                alt="Truk BGT Rent"
                fill
                className="object-contain"
                priority
              />
            </div>

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
                    className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
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
