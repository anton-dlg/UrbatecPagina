import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Pretitle from "./Pretitle";

import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import Modal from "./Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const workData = [
  {
    img: "/Fotos/Instalaciones1.1.png",
    modalImg: "/Fotos/Instalaciones1.2.png",
    name: "HUBBELL",
    description: "2023",
    details: "Instalación de Equipos Hubbell.",
    category: "Instalaciones",
    year: "2023",
    location: "Toluca, EDO MX",
  },
  {
    img: "/Fotos/Montaje1.1.png",
    modalImg: "/Fotos/Montaje1.2.png",
    name: "MARCOS",
    description: "2023",
    details: "800 m2 de montaje de estructuras metálicas.",
    category: "Montaje",
    year: "2023",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje2.1.png",
    modalImg: "/Fotos/Montaje2.2.png",
    name: "TORDEC",
    description: "2023",
    details: "1,600 m2 de montaje de estructuras metálicas.",
    category: "Montaje",
    year: "2023",
    location: "Cadereyta, NL",
  },
  {
    img: "/Fotos/Montaje3.1.png",
    modalImg: "/Fotos/Montaje3.2.png",
    name: "RECAL ESTRUCTURAS",
    description: "2023",
    details: "Torre Bajío, Punto Central. Montaje de 2,000 Toneladas de estructuras metálicas.",
    category: "Montaje",
    year: "2023",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje4.1.png",
    modalImg: "/Fotos/Montaje4.2.png",
    name: "HUBBELL",
    description: "2023",
    details: "Suministro e Instalación Transportador.",
    category: "Montaje",
    year: "2023",
    location: "Toluca, EDO MX",
  },
  {
    img: "/Fotos/Obra1.1.png",
    modalImg: "/Fotos/Obra1.2.png",
    name: "TRIMEX",
    description: "2022",
    details: "Patio de maniobras, demoliciones y excavaciones. Pisos de concreto y edificios de servicios.",
    category: "Obra Civil",
    year: "2022",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Instalaciones2.1.png",
    modalImg: "/Fotos/Instalaciones2.2.png",
    name: "MAN WAH",
    description: "2022",
    details: "Construcción del complejo industrial. Los trabajos que se realizaron fue la construcción de la red de drenaje, fabricación de registros y trabajos para las instalaciones especiales.",
    category: "Instalaciones",
    year: "2022",
    location: "Salinas Victoria, NL",
  },
  {
    img: "/Fotos/Instalaciones3.1.png",
    modalImg: "/Fotos/Instalaciones3.2.png",
    name: "ESTADO DE NL",
    description: "2022",
    details: "Reubicación de instalaciones de trampa de diábolos.",
    category: "Instalaciones",
    year: "2022",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje5.1.png",
    modalImg: "/Fotos/Montaje5.2.png",
    name: "TODEC",
    description: "2022",
    details: "Montaje de 35,000 kg de estructuras metálicas.",
    category: "Montaje",
    year: "2022",
    location: "Zuazua, NL",
  },
  {
    img: "/Fotos/Montaje6.1.png",
    modalImg: "/Fotos/Montaje6.2.png",
    name: "STIVIA",
    description: "2022",
    details: "Fabriación de acero estructural (600 toneladas), 8,000 m2 de lámina KR24/KR18.",
    category: "Montaje",
    year: "2022",
    location: "Apodaca, NL",
  },
  {
    img: "/Fotos/Montaje7.1.png",
    modalImg: "/Fotos/Montaje7.2.png",
    name: "CEDIS TREVIÑO",
    description: "2022",
    details: "Montaje Estructura 310 Tons, pintura  y laminacion 6,000 m2.",
    category: "Montaje",
    year: "2022",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Obra2.1.png",
    modalImg: "/Fotos/Obra2.2.png",
    name: "DECASA",
    description: "2021",
    details: "Ampliación de nave industrial, donde trabajamos en diversas áreas de cimentación, muros de block  aparente, ediﬁcación y muros de concreto entre otros.",
    category: "Obra Civil",
    year: "2021",
    location: "Tlajomulco, JAL",
  },
  {
    img: "/Fotos/Obra3.1.png",
    modalImg: "/Fotos/Obra3.2.png",
    name: "PEPSICO",
    description: "2021",
    details: "Cambio de carpeta asfáltica a losa de rodamiento en la planta, remodelación para una nueva lavadora de  botellas, así como el bacheo del área de estacionamiento.",
    category: "Obra Civil",
    year: "2021",
    location: "Guadalajara, JAL",
  },
  {
    img: "/Fotos/Montaje8.1.png",
    modalImg: "/Fotos/Montaje8.2.png",
    name: "RICOLINO",
    description: "2021",
    details: "Montaje de 55,000 kg de estructuras metálicas.",
    category: "Montaje",
    year: "2021",
    location: "San Luis Potosí, SLP",
  },
  {
    img: "/Fotos/Montaje9.1.png",
    modalImg: "/Fotos/Montaje9.2.png",
    name: "ATI",
    description: "2021",
    details: "Mantenimiento de KR18 a 1,500 m2 de techo de lámina.",
    category: "Montaje",
    year: "2021",
    location: "Apodaca, NL",
  },
  {
    img: "/Fotos/Montaje10.1.png",
    modalImg: "/Fotos/Montaje10.2.png",
    name: "HASKELL",
    description: "2021",
    details: "Cubierta Edificio Wellness. Fabricacion y montaje 110 toneladas de estructuras.",
    category: "Montaje",
    year: "2021",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje11.1.png",
    modalImg: "/Fotos/Montaje11.2.png",
    name: "RECAL ESTRUCTURAS",
    description: "2021",
    details: "Linea nueva producción planta Modelo. Armado y montaje de racks en sitio con alta precisión",
    category: "Montaje",
    year: "2021",
    location: "Nava, COA",
  },
  {
    img: "/Fotos/Montaje12.1.png",
    modalImg: "/Fotos/Montaje12.2.png",
    name: "DOSET",
    description: "2021",
    details: "Edificio Colegio Doset. Fabricacion y montaje 90 toneladas de estructuras.",
    category: "Montaje",
    year: "2021",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Obra4.1.png",
    modalImg: "/Fotos/Obra4.2.png",
    name: "FUNDIDORA",
    description: "2020",
    details: "Rehabilitación de losa y muros (13,000 m2) en el estacionamiento de la Macroplaza.",
    category: "Obra Civil",
    year: "2020",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Instalaciones4.1.png",
    modalImg: "/Fotos/Instalaciones4.2.png",
    name: "MUNICIPIO DE APODACA",
    description: "2020",
    details: "Instalación de tubería de agua potable con bayonetas de acero al carbón de 36” de diámetro en el área de Agua Fría",
    category: "Instalaciones",
    year: "2020",
    location: "Apodaca, NL",
  },
  {
    img: "/Fotos/Montaje13.1.png",
    modalImg: "/Fotos/Montaje13.2.png",
    name: "TALLER CELAYA",
    description: "2020",
    details: "1,200 m2 de estructura metálica para nave, sistema de techo y muros metálicos.",
    category: "Montaje",
    year: "2020",
    location: "Celaya, GTO",
  },
  {
    img: "/Fotos/Instalaciones5.1.png",
    modalImg: "/Fotos/Instalaciones5.2.png",
    name: "RUGO",
    description: "2019",
    details: "Suministro e instalación de equipo dosificador y cangilones de concreto.",
    category: "Instalaciones",
    year: "2019",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje14.1.png",
    modalImg: "/Fotos/Montaje14.2.png",
    name: "GALERIAS MONTERREY",
    description: "2019",
    details: "Montaje de 3,000 toneladas de estructuras metálicas.",
    category: "Montaje",
    year: "2019",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Instalaciones6.1.png",
    modalImg: "/Fotos/Instalaciones6.2.png",
    name: "PUNTO VALLE",
    description: "2018",
    details: "Instalaciones eléctricas de iluminación exterior, arbotantes y preparación eléctrica de cubos de elevadores.",
    category: "Instalaciones",
    year: "2018",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje15.1.png",
    modalImg: "/Fotos/Montaje15.2.png",
    name: "MULTINANT",
    description: "2018",
    details: "10,000 m2 de fabricación y montaje de acero estructural, sistemas de techo KR18 y muros metálicos.",
    category: "Montaje",
    year: "2018",
    location: "Saltillo, COA",
  },
  {
    img: "/Fotos/Montaje16.1.png",
    modalImg: "/Fotos/Montaje16.2.png",
    name: "PLAZA ARCADIA",
    description: "2018",
    details: "Recubrimientos de acabados en estructura metalica. Montaje de 1,200 toneladas de estructuras.",
    category: "Montaje",
    year: "2018",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje17.1.png",
    modalImg: "/Fotos/Montaje17.2.png",
    name: "KAYAKU",
    description: "2017",
    details: "600 m2 de estructura metálica para almacén, sistema de techo KR18 y muros metálicos.",
    category: "Montaje",
    year: "2017",
    location: "Salinas Victoria, NL",
  },
  {
    img: "/Fotos/Montaje18.1.png",
    modalImg: "/Fotos/Montaje18.2.png",
    name: "CINÉPOLIS",
    description: "2016",
    details: "3,000 m2 de estructura metálica para edificio, sistema de techo econo-techo y remates.",
    category: "Montaje",
    year: "2016",
    location: "Monterrey, NL",
  },
  {
    img: "/Fotos/Montaje19.1.png",
    modalImg: "/Fotos/Montaje19.2.png",
    name: "BLACKHAWK",
    description: "2014",
    details: "Montaje de 8,600 m2 de estructura metálica.",
    category: "Montaje",
    year: "2014",
    location: "Apodaca, NL",
  },
  {
    img: "/Fotos/Montaje20.1.png",
    modalImg: "/Fotos/Montaje20.2.png",
    name: "STIVA",
    description: "2013",
    details: "Fabricación y montaje de 8,000 kg de techo KR18 galvanizado y plafón pintado.",
    category: "Montaje",
    year: "2013",
    location: "Apodaca, NL",
  },
  {
    img: "/Fotos/Montaje21.1.png",
    modalImg: "/Fotos/Montaje21.2.png",
    name: "STIVA",
    description: "2012",
    details: "Fabricación y montaje de 5,000 kg de techo KR18 galvanizado y plafón pintado.",
    category: "Montaje",
    year: "2012",
    location: "Reynosa, TAM",
  },
];


const categories = ["Todos", "Montaje", "Obra Civil", "Instalaciones"];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const swiperRef = useRef();

  const filteredData =
    activeFilter === "Todos"
      ? workData
      : workData.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto relative">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-10"
        >
          <Pretitle text="Nuestro trabajo" center />
          <h2 className="h2 mb-3">Descubre nuestros proyectos</h2>
        </motion.div>

        {/* Botones de filtro */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700"
              } hover:bg-primary hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3},
            }}
          >
            <div className="swiper-pagination mt-4 md:hidden flex justify-center" />

            {filteredData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[500px] relative group overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={item.img}
                    fill
                    className="object-cover"
                    alt={item.name}
                  />
                  <div className="absolute bottom-0 bg-primary/80 w-full p-6">
                    <h4 className="text-white text-xl font-semibold uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-white">
                      <p>{item.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="mt-4 flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow absolute -left-12 top-1/2 transform -translate-y-1/2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow absolute -right-12 top-1/2 transform -translate-y-1/2 text-gray-700 hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Modal con iconos */}
        {selectedProject && (
          <Modal onClose={() => setSelectedProject(null)} title={selectedProject.name}>
            <div className="space-y-4">
              <div className="w-full max-w-[600px] aspect-[3/2] relative mx-auto">
                <Image
                  src={selectedProject.modalImg}
                  alt={selectedProject.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{selectedProject.year}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{selectedProject.location}</span>
              </div>
              <p className="text-gray-700">{selectedProject.details}</p>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Work;
