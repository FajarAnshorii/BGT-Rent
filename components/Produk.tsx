import { PRODUCTS } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'

export default function Produk() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Produk Kami
          </span>
          <h2 className="section-title">Produk Kami</h2>
          <p className="section-subtitle mx-auto">
            BGT Rent menyediakan penyewaan kendaraan dalam jangka bulanan atau tahunan dengan berbagai jenis kendaraan yang dapat disesuaikan dengan kebutuhan pelanggan
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {PRODUCTS.map((product) => (
              <div
                key={product}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-medium text-gray-900">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
