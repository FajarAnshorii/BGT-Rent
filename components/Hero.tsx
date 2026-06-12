'use client'

import Image from 'next/image'
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react'
import { WHATSAPP_LINK, WHATSAPP_MESSAGES, COMPANY } from '@/lib/constants'

const LOGO_URL = 'https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-13%2FMiniMax-M2.7%2F2053411356652089514%2F06778f4a4d5a129639dc1eef919e7fb654c6e8e2aad6ba22863a5c70230556fd..png?Expires=1781367219&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=UAos%2BASI5UlllLfxmpjboYoO1Fw%3D'

const HIGHLIGHTS = [
  'Rental kendaraan bulanan & tahunan',
  'Untuk perusahaan, instansi, proyek, dan operasional',
  'Harga fleksibel dan bisa negosiasi',
  'Area layanan Surabaya – Jakarta',
  'Konsultasi cepat via WhatsApp',
]

export default function Hero() {
  const handleScrollToLayanan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#layanan')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-200 rounded-full opacity-50 blur-3xl" />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            {COMPANY.tagline && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                {COMPANY.tagline}
              </div>
            )}

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Rental Kendaraan <span className="text-gradient">Bulanan & Tahunan</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              BGT Rent dari {COMPANY.name} menyediakan layanan penyewaan kendaraan bulanan dan tahunan dengan pilihan armada yang fleksibel, dukungan operasional yang responsif, dan harga yang dapat dinegosiasikan sesuai kebutuhan pelanggan.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {HIGHLIGHTS.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi via WhatsApp
              </a>
              <a
                href="#layanan"
                onClick={handleScrollToLayanan}
                className="btn-secondary text-lg px-8 py-4"
              >
                Lihat Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Service Area Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>Melayani area: {COMPANY.serviceArea}</span>
            </div>
          </div>

          {/* Right Content - Logo/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full" />

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <Image
                    src={LOGO_URL}
                    alt={COMPANY.brand}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-400 rounded-full opacity-20" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-300 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
