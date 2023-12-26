import Container from "./container";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const items = [
  { name: "Github", icon: FaGithub, link: "https://github.com/minocrafft" },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/mainho._",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/minocraft",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="pt-14 pb-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            If you want to know more about me.
          </h3>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/minocrafft"
              className="mx-3 bg-black text-white border border-black hover:bg-white hover:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Github
            </a>
            <a
              href="https://minocraft.notion.site/f56e25e85e994efe940686b6d8af9ce5?pvs=4"
              className="mx-3 bg-black text-white border border-black hover:bg-white hover:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Notion
            </a>
            <a
              href="https://instagram.com/mainho._"
              className="mx-3 bg-black text-white border border-black hover:bg-white hover:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="pb-12 flex flex-col items-center text-gray-500">
          <p>&copy; 2023 Minho Kim. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
