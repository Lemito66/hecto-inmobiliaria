import SoldPropertyCard from "@/components/SoldPropertyCard"
import { SOLD_PROPERTIES } from "@/constants/properties"


export default function SoldProperties() {
  return (
    <section id="vendidas" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Propiedades Vendidas</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estas son algunas de las propiedades que hemos vendido exitosamente para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {SOLD_PROPERTIES.map((property) => (
            <SoldPropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
