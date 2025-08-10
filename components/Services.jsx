"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import { IoHome } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaBuilding } from "react-icons/fa";
import { PiWrenchFill } from "react-icons/pi";

import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const serviceData = [
  {
    name: "Habitacional",
    icon: <IoHome />,
    title: "Desarrollos Habitacionales",
    description:
      "Creamos espacios seguros, funcionales y estéticamente agradables para las familias mexicanas. Nuestro enfoque en calidad, planeación urbana y diseño nos permite entregar viviendas que mejoran la calidad de vida y fomentan comunidades sostenibles.",
    serviceList: [
      "Desarrollo de viviendas residenciales",
      "Construcción de fraccionamientos",
      "Obras de urbanización"
    ],
    thumbs: [
      { url: "/Fotos/habitacional1.png" },
      { url: "/Fotos/habitacional2.webp" },
    ],
  },
  {
    name: "Industrial",
    icon: <LiaIndustrySolid />,
    title: "Obra Industrial y Estructural",
    description:
      "Diseñamos y construimos soluciones industriales a gran escala, incluyendo naves, estructuras metálicas y sistemas de tubería especializada. Nuestra experiencia técnica garantiza eficiencia, durabilidad y cumplimiento de normativas en cada proyecto.",
    serviceList: [
      "Fabricación y montaje de estructuras metálicas",
      "Construcción de naves industriales",
      "Instalación de tuberías con soldadura especial",
      "Ingeniería de taller"
    ],
    thumbs: [
      { url: "/Fotos/Montaje11.1.png" },
      { url: "/Fotos/Montaje19.1.png" },
    ],
  },
  {
    name: "Comercial",
    icon: <FaBuilding />,
    title: "Espacios Comerciales y Administrativos",
    description:
      "Transformamos espacios laborales y comerciales para maximizar funcionalidad, confort y presencia de marca. Ofrecemos remodelaciones integrales adaptadas a las necesidades operativas y estéticas de cada cliente.",
    serviceList: [
      "Remodelación de oficinas administrativas",
      "Adecuación de espacios comerciales",
      "Adaptación de interiores funcionales",
    ],
    thumbs: [
      { url: "/Fotos/Montaje3.1.png" },
      { url: "/Fotos/Montaje10.2.png" },
    ],
  },
  {
    name: "Otros",
    icon: <PiWrenchFill />,
    title: "Proyectos Especiales e Integrales",
    description:
      "Ejecutamos proyectos llave en mano que abarcan desde la ingeniería hasta la entrega final, incluyendo herrería especializada y soluciones en telecomunicaciones. Nuestra capacidad de integración asegura resultados completos, eficientes y alineados a los objetivos del cliente.",
    serviceList: [
      "Proyectos llave en mano",
      "Herrería especializada",
      "Instalaciones de telecomunicaciones",
      "Coordinación integral de obra",
    ],
    thumbs: [
      { url: "/Fotos/Instalaciones4.1.png" },
      { url: "/Fotos/otros1.jpg" },
    ],
  },
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Habitacional"); // ✅ Aquí se selecciona Habitacional por defecto

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Servicios" center />
          <h2 className="h2 mb-3">Somos lo que construimos</h2> 
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="Habitacional" // ✅ Valor por defecto corregido
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList
              className="
                grid grid-cols-2 sm:grid-cols-4
                xl:grid-cols-1
                gap-2 sm:gap-4 xl:gap-[30px]
                h-auto xl:h-full
                w-full rounded-none p-0 bg-transparent
                xl:w-[345px]
              "
            >
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="
                    w-full
                    rounded-none
                    h-[60px] sm:h-[80px] xl:h-[100px]
                    flex items-center justify-center xl:justify-center
                    relative shadow-custom p-0 outline-none
                    xl:pl-[100px]        /* reserva exactamente el ancho del ícono en XL */
                  "
                >
                  {/* Ícono: oculto en móviles, visible en xl; está posicionado absolute */}
                  <div
                    className={`hidden xl:flex w-[100px] h-[100px] items-center justify-center absolute left-0 top-0 ${
                      activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"
                    } z-10`}
                  >
                    <div className="text-4xl">{item.icon}</div>
                  </div>

                  {/* Texto */}
                  <div className="
                    uppercase font-primary font-semibold tracking-[.6px]
                    text-xs sm:text-sm xl:text-base
                    text-center xl:text-left
                    w-full xl:w-auto
                    ml-0
                  ">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>




            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* imágenes */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* texto */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
