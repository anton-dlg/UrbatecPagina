// app/contacto/page.jsx
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-50 to-neutral-200 flex flex-col items-center">
      {/* Header negro */}
      <header className="w-full bg-black py-4 flex justify-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </header>

      {/* Imagen de perfil PNG sin recortar */}
      <div className="mt-8 flex flex-col items-center">
        <Image
          src="/assets/logo_solo.png"
          alt="Foto de perfil"
          width={150}
          height={150}
          className="object-contain"
        />
        <h1 className="text-black text-xl font-semibold mt-4">
          Información de Contacto
        </h1>
      </div>

      {/* Lista de enlaces de contacto con íconos */}
      <div className="mt-8 w-full max-w-xs flex flex-col gap-4">
        {[
          { label: "Guardar Contacto", link: "/contacto.vcf", icon: <FaAddressCard size={20}  /> },
          { label: "WhatsApp", link: "https://wa.me/528120299514", icon: <FaWhatsapp size={20}  /> },
          { label: "Página Web", link: "https://www.urbatec.com.mx", icon: <TbWorld size={20}  /> },
          { label: "Correo", link: "mailto:jdelagarza@urbatec.com.mx", icon: <MdEmail size={20} /> },
          { label: "Instagram", link: "https://instagram.com/urbatec.mx", icon: <FaInstagram size={20}  /> },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-gray-900 rounded-xl py-3 px-4 shadow-md hover:bg-gray-200 transition"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
