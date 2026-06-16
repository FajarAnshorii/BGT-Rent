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

        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {/* Industry Customers */}
          <div className="bg-white rounded-2xl p-3 sm:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Factory className="w-4 h-4 sm:w-6 sm:h-6 text-primary-600" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-gray-900">Industry</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 flex-1">
              {CUSTOMERS_INDUSTRY.map((customer) => (
                <div
                  key={customer}
                  className="px-2 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-[10px] sm:text-sm leading-snug flex items-center justify-center"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>

          {/* Non-Industry Customers */}
          <div className="bg-white rounded-2xl p-3 sm:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary-600" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-gray-900">Non-Industry</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 flex-1">
              {CUSTOMERS_NON_INDUSTRY.map((customer) => (
                <div
                  key={customer}
                  className="px-2 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-[10px] sm:text-sm leading-snug flex items-center justify-center"
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
