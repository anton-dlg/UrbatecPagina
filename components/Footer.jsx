import Image from "next/image";
import Link from "next/link";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
} from "react-icons/ri";

import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.svg" width={230} height={48} alt="" />
            </Link>
          </div>

          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contacto</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>(81) 2029 9514</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>
                  jdelagarza@urbatec.com.mx <br />
                  contacto@urbatec.com.mx
                </p>
              </li>
            </ul>
          </div>

          {/* redes sociales */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Redes</h4>
            <p className="mb-4">
              Síguenos en nuestras redes sociales para conocer más sobre nuestros proyectos y servicios.
            </p>
            <Socials
              containerStyles="flex gap-6"
              iconStyles="text-white text-2xl hover:text-accent transition-colors"
            />
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; 2025 Urbanizaciones Técnicas S.A.. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
