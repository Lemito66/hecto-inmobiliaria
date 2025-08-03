"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Bed, Square, MessageCircle, Facebook, Instagram, Twitter, Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

// Datos simulados para propiedades en venta
const propertiesForSale = [
  {
    id: 1,
    title: "Casa Moderna en La Carolina",
    price: "$285,000",
    location: "La Carolina, Quito",
    area: "180 m²",
    bedrooms: 3,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Departamento de Lujo",
    price: "$195,000",
    location: "Cumbayá, Quito",
    area: "120 m²",
    bedrooms: 2,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Villa con Jardín",
    price: "$420,000",
    location: "Tumbaco, Quito",
    area: "250 m²",
    bedrooms: 4,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Penthouse Exclusivo",
    price: "$650,000",
    location: "González Suárez, Quito",
    area: "300 m²",
    bedrooms: 3,
    image: "/placeholder.svg?height=300&width=400",
  },
]

// Datos simulados para propiedades vendidas
const soldProperties = [
  {
    id: 1,
    title: "Casa Colonial Restaurada",
    location: "Centro Histórico, Quito",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    id: 2,
    title: "Departamento Vista al Parque",
    location: "La Floresta, Quito",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    id: 3,
    title: "Casa Familiar",
    location: "Los Chillos, Quito",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    id: 4,
    title: "Loft Moderno",
    location: "Mariscal Sucre, Quito",
    image: "/placeholder.svg?height=250&width=350",
  },
]


export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Hetco Inmobiliaria</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("propiedades")}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  Propiedades
                </button>
                <button
                  onClick={() => scrollToSection("vendidas")}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  Vendidas
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/593XXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Quiénes Somos?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Somos una empresa inmobiliaria comprometida con encontrar el hogar perfecto para cada familia ecuatoriana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Facilitar el proceso de compra y venta de propiedades, brindando un servicio personalizado,
                  transparente y confiable que supere las expectativas de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ser la inmobiliaria líder en Ecuador, reconocida por nuestra excelencia en el servicio, innovación
                  tecnológica y compromiso con el desarrollo urbano sostenible.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Nuestro Equipo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Contamos con un equipo de profesionales altamente capacitados, con más de 15 años de experiencia en el
                  mercado inmobiliario ecuatoriano, listos para asesorarte en cada paso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Properties for Sale Section */}
      <section id="propiedades" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Propiedades en Venta</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubre nuestra selección de propiedades exclusivas, cuidadosamente elegidas para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {propertiesForSale.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden shadow-lg hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {property.title}
                  </CardTitle>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{property.price}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {property.location}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2" />
                      {property.area}
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2" />
                      {property.bedrooms} habitaciones
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    onClick={() =>
                      alert(
                        `Viendo detalles de: ${property.title}\nPrecio: ${property.price}\nUbicación: ${property.location}`,
                      )
                    }
                  >
                    Ver Más Detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sold Properties Section */}
      <section id="vendidas" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Propiedades Vendidas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estas son algunas de las propiedades que hemos vendido exitosamente para nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {soldProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20 relative"
              >
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={350}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-600 text-white font-bold px-3 py-1">
                    VENDIDO
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {property.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    {property.location}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Hetco Inmobiliaria</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
                Tu socio de confianza en el mercado inmobiliario ecuatoriano. Más de 15 años ayudando a familias a
                encontrar su hogar ideal.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-gray-300 dark:text-gray-400">+593 2 XXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-gray-300 dark:text-gray-400">info@hetcoinmobiliaria.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                  <span className="text-gray-300 dark:text-gray-400">
                    Av. Amazonas N24-03 y Colón
                    <br />
                    Quito, Ecuador
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("propiedades")}
                  className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-left"
                >
                  Propiedades en Venta
                </button>
                <Link href="#" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Propiedades en Alquiler
                </Link>
                <Link href="#" className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-left"
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
    </div>
  )
}
