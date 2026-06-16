import { Eye, Target, Rocket } from 'lucide-react'

export default function VisiMisi() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Visi & Misi
          </span>
          <h2 className="section-title">Visi & Misi Kami</h2>
        </div>

        {/* Visi */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 text-center border border-primary-200">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Menjadi perusahaan logistik dan rental terpercaya di jalur Surabaya–Jakarta yang dikenal karena{' '}
              <strong className="text-primary-600">kecepatan</strong>,{' '}
              <strong className="text-primary-600">transparansi</strong>, dan{' '}
              <strong className="text-primary-600">harga adil</strong>.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Misi</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            <div className="card p-3 sm:p-6 hover:border-primary-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-600">1</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Kirim Tepat Waktu</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Operasional berjalan menggunakan jadwal, tracking real-time, dan minim delay.
              </p>
            </div>

            <div className="card p-3 sm:p-6 hover:border-primary-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-600">2</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Jaga Keamanan</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Armada terawat, SOP packing, dan asuransi aktif untuk mendukung keamanan layanan.
              </p>
            </div>

            <div className="card p-3 sm:p-6 hover:border-primary-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-600">3</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Bangun Relasi Jangka Panjang</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fokus melayani UMKM, agen, perusahaan, instansi, dan pelanggan rutin.
              </p>
            </div>

            <div className="card p-3 sm:p-6 hover:border-primary-200 border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-600">4</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Pakai Teknologi Sederhana</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Menggunakan GPS, WhatsApp tracking, Google Sheet, atau software sederhana agar operasional lebih efisien.
              </p>
            </div>

            <div className="card p-3 sm:p-6 hover:border-primary-200 border border-gray-100 col-span-2 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary-600">5</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Tumbuh Sehat</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Menambah armada secara bertahap ketika okupansi sudah lebih dari 70% dan layanan berjalan stabil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
