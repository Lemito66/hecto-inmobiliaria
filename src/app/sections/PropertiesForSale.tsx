import PropertyCard from "@/components/PropertyCard"
import { PROPERTIES_FOR_SALE } from "@/constants/properties"


export default function PropertiesForSale() {
  return (
    <section id="propiedades" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Propiedades en Venta</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre nuestra selección de propiedades exclusivas, cuidadosamente elegidas para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {PROPERTIES_FOR_SALE.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
