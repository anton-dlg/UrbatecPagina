import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100vh] bg-hero bg-no-repeat bg-cover bg-center relative"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>

      <div className="container mx-auto h-full flex items-center px-4 sm:px-6">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start w-full max-w-[608px] break-words">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            <span className="text-accent">Líderes</span> en soluciones integrales de construcción
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9 text-base sm:text-lg"
          >
            Más de cuatro décadas construyendo proyectos con calidad, precisión y compromiso. Te acompañamos en cada etapa de tu proyecto para garantizar el mejor resultado.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10"
          >
            <Link to="contact" smooth={true} duration={500}>
              <Button text="Contáctanos" />
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <Button text="Nuestro trabajo" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
