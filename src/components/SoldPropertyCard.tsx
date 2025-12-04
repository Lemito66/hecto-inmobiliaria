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

  console.log(property.image);
  return (
    <Card className="overflow-hidden shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20 relative">
      <div className="relative w-full h-56">
        <Image
          src={property.image}
          alt={property.title}
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
          className="w-full h-56 object-cover object-center transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
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
