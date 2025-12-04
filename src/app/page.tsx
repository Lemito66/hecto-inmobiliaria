"use client"
import Navbar from "@/components/NavBar"
import Hero from "./sections/Hero"
import WhatsappButton from "@/components/WhatsappButton"
import Footer from "./sections/Footer"
import PropertiesForSale from "./sections/PropertiesForSale"
import SoldProperties from "./sections/SoldProperties"
import AboutUs from "./sections/AboutUs"
import Image from "next/image"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <AboutUs />
      <PropertiesForSale />
      <SoldProperties />
      <Footer />
      <WhatsappButton />
    </div>
  )
}