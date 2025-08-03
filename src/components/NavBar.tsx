"use client"
import { ModeToggle } from "./ModeToggle"
import { scrollToSection } from "@/lib/utils"

export default function Navbar() {
  const navItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Nosotros", id: "nosotros" },
    { label: "Propiedades", id: "propiedades" },
    { label: "Vendidas", id: "vendidas" },
    { label: "Contacto", id: "contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Hetco Inmobiliaria</h1>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
