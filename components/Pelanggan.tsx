import { CUSTOMERS_INDUSTRY, CUSTOMERS_NON_INDUSTRY } from '@/lib/constants'
import { Building2, Factory } from 'lucide-react'

export default function Pelanggan() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Pelanggan Kami
          </span>
          <h2 className="section-title">Pelanggan Kami</h2>
          <p className="section-subtitle mx-auto">
            Kepercayaan pelanggan menjadi motivasi kami untuk terus meningkatkan kualitas layanan rental kendaraan yang handal, fleksibel, dan profesional
          </p>
        </div>

        {/* Industry Customers */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Industry</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CUSTOMERS_INDUSTRY.map((customer) => (
                <div
                  key={customer}
                  className="px-4 py-3 bg-gray-50 rounded-lg text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Non-Industry Customers */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Non-Industry</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CUSTOMERS_NON_INDUSTRY.map((customer) => (
                <div
                  key={customer}
                  className="px-4 py-3 bg-gray-50 rounded-lg text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
