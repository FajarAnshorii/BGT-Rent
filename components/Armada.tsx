'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FLEET, FLEET_IMAGES, WHATSAPP_LINK, WHATSAPP_MESSAGES } from '@/lib/constants'

const AMBULANCE_IMAGES = [
  '/images/ambulance-front.jpg',
  '/images/ambulance-side.jpg',
  '/images/ambulance-interior.jpg',
  '/images/ambulance-panel.jpg',
]

function AmbulanceImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? AMBULANCE_IMAGES.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === AMBULANCE_IMAGES.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === AMBULANCE_IMAGES.length - 1 ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full group/slider overflow-hidden">
      {AMBULANCE_IMAGES.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img}
            alt={`Ambulans ${idx + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
      
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity z-30 pointer-events-auto"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity z-30 pointer-events-auto"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-30">
        {AMBULANCE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setCurrentIndex(idx)
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary-500 scale-125' : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Armada() {
  return (
    <section id="armada" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Armada Kami
          </span>
          <h2 className="section-title">Pilihan Armada</h2>
          <p className="section-subtitle mx-auto">
            Berbagai jenis kendaraan untuk memenuhi kebutuhan operasional Anda
          </p>
        </div>

        {/* Fleet Grid - Using Real Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET_IMAGES.slice(0, 3).map((imageUrl, index) => (
            <div
              key={index}
              className="card group hover:shadow-xl hover:border-primary-200 border border-gray-100 overflow-hidden"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={FLEET[index]?.title || `Armada ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    Tersedia
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {FLEET[index]?.title || `Armada ${index + 1}`}
                </h3>
                <p className="text-gray-600 text-sm">
                  {FLEET[index]?.description || 'Kendaraan operasional siap pakai untuk berbagai kebutuhan.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Fleet - Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {FLEET_IMAGES.slice(3, 5).map((imageUrl, index) => {
            const actualIndex = index + 3;
            const item = FLEET[actualIndex];
            const isAmbulance = item?.title.includes('Ambulans');

            return (
              <div
                key={actualIndex}
                className="card group hover:shadow-xl hover:border-primary-200 border border-gray-100 overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="relative h-40 bg-gray-100 overflow-hidden">
                  {isAmbulance ? (
                    <AmbulanceImageSlider />
                  ) : (
                    <>
                      <Image
                        src={imageUrl}
                        alt={item?.title || `Armada ${actualIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                      Tersedia
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item?.title || `Armada ${actualIndex + 1}`}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item?.description || 'Kendaraan siap pakai untuk berbagai kebutuhan.'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Request Card */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Kendaraan Custom by Request</h3>
            <p className="text-primary-100 mb-4">
              Jenis kendaraan dapat disesuaikan dengan kebutuhan pelanggan. Konsultasikan kebutuhan Anda dengan tim kami.
            </p>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_MESSAGES.armada)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tanya Ketersediaan Armada
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-amber-800">
              <strong>Catatan:</strong> Ketersediaan unit dapat berubah sewaktu-waktu. Silakan hubungi kami untuk informasi armada terbaru.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
