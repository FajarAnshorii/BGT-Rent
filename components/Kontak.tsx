import { COMPANY, WHATSAPP_LINK, WHATSAPP_MESSAGES, GOOGLE_MAPS_LINK } from '@/lib/constants'
import { MapPin, Phone, MessageCircle, Clock, Building2 } from 'lucide-react'

export default function Kontak() {
  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="section-title">Hubungi BGT Rent</h2>
          <p className="section-subtitle mx-auto">
            Butuh kendaraan untuk operasional perusahaan, proyek, instansi, atau kebutuhan jangka panjang? Hubungi kami untuk konsultasi dan penawaran harga terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {/* Company */}
              <div className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{COMPANY.name}</h3>
                  <p className="text-gray-600">
                    {COMPANY.brand}
                    {COMPANY.tagline && ` - ${COMPANY.tagline}`}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-start gap-4 hover:border-green-200 border border-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600">{COMPANY.whatsappDisplay}</p>
                </div>
              </a>

              {/* Address */}
              <div className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600">{COMPANY.address}</p>
                </div>
              </div>

              {/* Service Area */}
              <div className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Area Layanan</h3>
                  <p className="text-gray-600">{COMPANY.serviceArea}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-lg py-4"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.682!2d106.6767!3d-6.2397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMjQuNSJTIDEwNsKwNDAnMzIuNSJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BGT Rent Location"
              className="min-h-[400px]"
            />
          </div>
        </div>

        {/* Map Link */}
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <MapPin className="w-4 h-4" />
            Lihat di Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
