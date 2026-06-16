import Image from 'next/image'
import { COMPANY, CORE_VALUES } from '@/lib/constants'
import { Shield, Heart, MessageCircle } from 'lucide-react'

const VALUE_ICONS = [Shield, Heart, MessageCircle]

export default function TentangKami() {
  return (
    <section id="tentang" className="section-padding bg-white relative overflow-hidden">
      {/* Peeking Ambulance */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[48%] w-[700px] h-[578px] hidden lg:block pointer-events-none select-none z-10">
        <Image
          src="/images/ambulance-peek.png"
          alt="Ambulans BGT Rent"
          fill
          className="object-contain"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="section-title">Tentang BGT Rent</h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-lg mx-auto text-gray-600 mb-12">
            <p className="text-sm sm:text-lg leading-relaxed text-justify sm:text-center">
              <strong className="text-gray-900">{COMPANY.brand}</strong> adalah layanan rental kendaraan dari{' '}
              <strong className="text-gray-900">{COMPANY.name}</strong> yang hadir untuk mendukung kebutuhan transportasi perusahaan, instansi, proyek, dan pelanggan non-industri.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed mt-4 text-justify sm:text-center">
              Transportasi merupakan salah satu aspek penting dalam menjaga kelancaran operasional bisnis. Indonesia sebagai negara kepulauan membutuhkan moda transportasi yang handal, efisien, dan mudah diakses. Karena itu, kami hadir menyediakan jasa dan produk transportasi yang unggul untuk mendukung pemerataan pertumbuhan perekonomian di Indonesia.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed mt-4 text-justify sm:text-center">
              {COMPANY.name} menyediakan rental kendaraan untuk kebutuhan Industry dan Non-Industry, dengan skema sewa bulanan maupun tahunan yang dapat disesuaikan dengan kebutuhan operasional pelanggan.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-12">
            {CORE_VALUES.map((value, index) => {
              const IconComponent = VALUE_ICONS[index]
              return (
                <div
                  key={value.title}
                  className="card p-2 sm:p-6 text-center group hover:border-primary-200 border border-transparent"
                >
                  <div className="w-8 h-8 sm:w-14 sm:h-14 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:bg-primary-500 transition-colors">
                    <IconComponent className="w-4 h-4 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{value.title}</h3>
                  <p className="text-[10px] sm:text-base text-gray-600 leading-tight">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
