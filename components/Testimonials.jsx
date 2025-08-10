import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="Misión y Visión" />
            <h2 className="h2 mb-6">Nuestro Propósito</h2>
            <p className="mb-10 max-w-[420px]">
              <b>Nuestra Misión</b><br />
              Proveer soluciones de construcción de alta calidad,
              utilizando tecnología avanzada y un equipo altamente
              capacitado, para satisfacer las necesidades de nuestros
              clientes en áreas como edificación, infraestructura y
              telecomunicaciones, manteniendo siempre un
              compromiso con la excelencia y la seguridad.<br />
              <b>Nuestra Visión</b><br />
              Ser líderes en la industria de la construcción y metal-
              mecánica en México, destacándonos por nuestra
              innovación, eficiencia y cumplimiento de los más altos
              estándares de calidad, contribuyendo al desarrollo del país.
            </p>
          </motion.div>
          {/* img & slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/Fotos/Mision.png"
                fill
                className="object-cover"
                quality={100}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
