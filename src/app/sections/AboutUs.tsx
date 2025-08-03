import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  const items = [
    {
      title: "Nuestra Misión",
      text: "Facilitar el proceso de compra y venta de propiedades, brindando un servicio personalizado, transparente y confiable que supere las expectativas de nuestros clientes.",
    },
    {
      title: "Nuestra Visión",
      text: "Ser la inmobiliaria líder en Ecuador, reconocida por nuestra excelencia en el servicio, innovación tecnológica y compromiso con el desarrollo urbano sostenible.",
    },
    {
      title: "Nuestro Equipo",
      text: "Contamos con un equipo de profesionales altamente capacitados, con más de 15 años de experiencia en el mercado inmobiliario ecuatoriano, listos para asesorarte en cada paso.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Quiénes Somos?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos una empresa inmobiliaria comprometida con encontrar el hogar perfecto para cada familia ecuatoriana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
