import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";
import { Link } from "react-scroll"; // Importa react-scroll

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text="Sobre Nosotros" />
              <h2 className="h2 mb-6">
                Profesionales Para Nuestros Clientes
              </h2>
              <p className="mb-11">
                Urbatec es una empresa mexicana con más de 46 años de experiencia en el sector de la construcción, fundada en 1979. 
                Nos especializamos en soluciones integrales de construcción, con un enfoque particular en la industria metal-mecánica. <br />
                A lo largo de nuestra trayectoria, hemos desarrollado una sólida reputación como un socio confiable para la ejecución de proyectos de alta
                complejidad, tanto en el sector público como privado.
              </p>
              {/* btn */}
              <Link to="contact" smooth={true} duration={500}>
                <Button text="Contáctanos"/>
              </Link>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/Fotos/Nosotros.png"}
                width={444}
                height={492}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
