"use client";

import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

// components
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  {
    name: "inicio",
    path: "home",
  },
  {
    name: "sobre nosotros",
    path: "about",
  },
  {
    name: "servicios",
    path: "services",
  },
  {
    name: "proyectos",
    path: "projects",
  },
  {
    name: "contacto",
    path: "contact",
  },
];

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/* nav & btn */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth={true}
                      spy={true}
                      duration={500}
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>

          </nav>

          {/* nav mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
