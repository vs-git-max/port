import React, { useState } from "react";

import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import image1 from "/design.jpg";
import image2 from "/dev.jpg";
import image3 from "/maintain.jpg";
import image4 from "/x.jpg";
import image6 from "/portfolio.jpg";
import image7 from "/commerce.jpg";
import image8 from "/portfolio2.jpg";

import Home from "./components/Sections/Home";
import Services from "./components/Sections/Services";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const socialLinks = [
    { icon: <IoLogoTiktok />, link: "#" },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/254704172680?text=Hi%20there!%20I%20like%20your%20work.",
    },
    { icon: <CiFacebook />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
  ];

  const menuItems = {
    leftMenuItems: [
      {
        label: "Home",
        link: "#home",
      },
      {
        label: "Services",
        link: "#services",
      },
    ],

    rightMenuItems: [
      {
        label: "Projects",
        link: "#projects",
      },
      {
        label: "Contact",
        link: "#contact",
      },
    ],
  };

  const projects = [
    {
      label: "X Clone",
      link: "https://github.com/vs-git-max/twiiter-clone",
      image: image4,
      tech: ["MongoDb", "React", "Tanstack", "Node", "Express", "Tailwind"],
    },
    {
      label: "Jay Soft Hub",
      link: "#",
      image: image1,
      tech: ["Figma"],
    },
    {
      label: "Sam Portfolio Website",
      link: "https://portfolio-henna-alpha-60.vercel.app/",
      image: image8,
      tech: ["React", "Tailwindcss", "Shadcnui", "Emailjs"],
    },
    {
      label: "Portfolio Website",
      link: "https://vs-git-max.github.io/samcopy-portfolio/",
      image: image6,
      tech: ["React", "Tailwindcss"],
    },
    {
      label: "E Commerce Website",
      link: "https://github.com/vs-git-max/e-website",
      image: image7,
      tech: [
        "React",
        "Tailwindcss",
        "Redux Toolkit",
        "Node",
        "Express",
        "MongoDb",
      ],
    },
  ];

  const services = [
    {
      service: "Web Design",
      image: image1,
      statement: "Clean, modern designs that feel right and look great.",
      action: "Lets bring your vision to life...",
    },
    {
      service: "Web Development",
      image: image2,
      statement: "Fast, responsive websites built to match your goals.",
      action: "Lets build something that works for you...",
    },
    {
      service: "Website Maintenance",
      image: image3,
      statement: "Clean, modern designs that feel right and look great.",
      action: "Lets keep your site in top shape...",
    },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="bg-black min-h-[100vh] scroll-smooth overflow-auto ">
      <Navbar
        menuItems={menuItems}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <MobileMenu
        menuItems={menuItems}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <Home socialLinks={socialLinks} />
      <Services services={services} />
      <Projects projects={projects} />
      <Contact socialLinks={socialLinks} />
    </div>
  );
};

export default App;
