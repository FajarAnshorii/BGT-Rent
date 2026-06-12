import { COMPANY, CORE_VALUES } from '@/lib/constants'
import { Shield, Heart, MessageCircle } from 'lucide-react'

const VALUE_ICONS = [Shield, Heart, MessageCircle]

export default function TentangKami() {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="section-title">Tentang BGT Rent</h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600 text-center mb-12">
            <p className="text-lg leading-relaxed">
              <strong className="text-gray-900">{COMPANY.brand}</strong> adalah layanan rental kendaraan dari{' '}
              <strong className="text-gray-900">{COMPANY.name}</strong> yang hadir untuk mendukung kebutuhan transportasi perusahaan, instansi, proyek, dan pelanggan non-industri.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Transportasi merupakan salah satu aspek penting dalam menjaga kelancaran operasional bisnis. Indonesia sebagai negara kepulauan membutuhkan moda transportasi yang handal, efisien, dan mudah diakses. Karena itu, kami hadir menyediakan jasa dan produk transportasi yang unggul untuk mendukung pemerataan pertumbuhan perekonomian di Indonesia.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              {COMPANY.name} menyediakan rental kendaraan untuk kebutuhan Industry dan Non-Industry, dengan skema sewa bulanan maupun tahunan yang dapat disesuaikan dengan kebutuhan operasional pelanggan.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {CORE_VALUES.map((value, index) => {
              const IconComponent = VALUE_ICONS[index]
              return (
                <div
                  key={value.title}
                  className="card text-center group hover:border-primary-200 border border-transparent"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
