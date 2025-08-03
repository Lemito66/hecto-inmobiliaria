"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Square, Bed } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Property {
  id: number
  title: string
  price: string
  location: string
  area: string
  bedrooms: number
  image: string
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-shadow duration-300">
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
  )
}
