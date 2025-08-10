
import {
  RiMailLine,
  RiWhatsappLine,
  RiInstagramLine,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="w-full shadow-custom p-6 xl:p-10 border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-10 xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[320px] xl:pr-[50px] xl:border-r xl:border-border/40">
              <h4 className="text-[24px] font-primary font-bold mb-4">
                Contacto
              </h4>
              <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
                No dudes en contactarnos por cualquier medio. Estamos aquí para ayudarte a hacer realidad tu proyecto.
              </p>
            </div>

            {/* cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="flex flex-col justify-between items-center text-center border p-6 shadow-sm break-words rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <RiMailLine className="text-[40px] text-accent" />
                  <h5 className="text-xl font-semibold">Escríbenos</h5>
                  <p className="text-sm leading-relaxed">
                    jdelagarza@urbatec.com.mx
                    <br />
                    contacto@urbatec.com.mx
                  </p>
                </div>
                <a
                  href="mailto:jdelagarza@urbatec.com.mx"
                  className="mt-4 bg-accent text-white px-4 py-2 rounded"
                >
                  Mandar mensaje
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col justify-between items-center text-center border p-6 shadow-sm break-words rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <RiWhatsappLine className="text-[40px] text-accent" />
                  <h5 className="text-xl font-semibold">WhatsApp</h5>
                  <p className="text-sm leading-relaxed">+52 81 2029 9514</p>
                </div>
                <a
                  href="https://wa.me/528120299514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-accent text-white px-4 py-2 rounded"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Instagram */}
              <div className="flex flex-col justify-between items-center text-center border p-6 shadow-sm break-words rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <RiInstagramLine className="text-[40px] text-accent" />
                  <h5 className="text-xl font-semibold">Instagram</h5>
                  <p className="text-sm leading-relaxed">@urbatec.mx</p>
                </div>
                <a
                  href="https://www.instagram.com/urbatec.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-accent text-white px-4 py-2 rounded"
                >
                  Ver perfil
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
