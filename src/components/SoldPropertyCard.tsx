import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Badge } from "lucide-react"
import Image from "next/image"

interface SoldProperty {
  id: number
  title: string
  location: string
  image: string
}

export default function SoldPropertyCard({ property }: { property: SoldProperty }) {
  return (
    <Card className="overflow-hidden shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20 relative">
      <div className="relative">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={350}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">
          VENDIDO
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{property.title}</CardTitle>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="h-4 w-4 mr-2" />
          {property.location}
        </div>
      </CardHeader>
    </Card>
  )
}
