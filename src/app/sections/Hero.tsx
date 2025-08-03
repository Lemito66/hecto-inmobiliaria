"use client"

import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-16 h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors"
    >
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
          Hetco Inmobiliaria
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tu hogar ideal te está esperando. Descubre propiedades exclusivas con la confianza y experiencia que nos
          caracteriza.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg"
          onClick={() => scrollToSection("propiedades")}
        >
          Ver Propiedades
        </Button>
      </div>
    </section>
  )
}
