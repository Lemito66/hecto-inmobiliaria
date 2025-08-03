import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { scrollToSection } from "@/lib/utils"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Marca e información */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hetco Inmobiliaria</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              Tu socio de confianza en el mercado inmobiliario ecuatoriano. Más de 15 años ayudando a familias a
              encontrar su hogar ideal.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+593 2 XXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">info@hetcoinmobiliaria.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  Av. Amazonas N24-03 y Colón
                  <br />
                  Quito, Ecuador
                </span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("propiedades")}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Propiedades en Venta
              </button>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Propiedades en Alquiler
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Servicios
              </Link>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Hetco Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
