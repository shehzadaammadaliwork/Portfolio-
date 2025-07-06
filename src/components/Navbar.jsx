import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logoNew } from "../assets";

// Icon imports
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoNew} alt="logo" className="h-12 w-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shehzada &nbsp;
            <span className="sm:block hidden"> Ammad Ali</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex flex-row gap-10 hidden items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Social & Contact Icons */}
          <li className="flex gap-4 ml-4">
            <a
              href="https://github.com/shehzadaammadaliwork/shehzadaammadaliwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a href="tel:+923164094959">
              <MdPhone className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a href="mailto:shehzadaammadaliwork@gmail.com">
              <MdEmail className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a
              href="https://instagram.com/sh_ammad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-300 text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shehzada-ammad-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-gray-300 text-xl" />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Mobile Social & Contact Icons */}
              <li className="flex gap-4 mt-4">
                <a
                  href="https://github.com/shehzadaammadaliwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-lg" />
                </a>
                <a href="tel:+923001234567">
                  <MdPhone className="text-white text-lg" />
                </a>
                <a href="mailto:yourname@example.com">
                  <MdEmail className="text-white text-lg" />
                </a>
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
