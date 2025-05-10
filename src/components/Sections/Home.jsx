import React, { useState } from "react";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { SiLinuxprofessionalinstitute } from "react-icons/si";

import image1 from "/sam.jpg";

const truncateWords = (text, wordLimit = 10) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? {
        isTruncated: true,
        preview: words.splice(0, wordLimit).join(" ") + "...",
        full: text,
      }
    : {
        isTruncated: false,
        preview: text,
        full: text,
      };
};

const Statement = ({ text, wordLimit }) => {
  const { preview, full, isTruncated } = truncateWords(text, wordLimit);

  const [expanded, setExpanded] = useState(false);

  const displayText = expanded || !isTruncated ? full : preview;

  return (
    <p
      className="text-blue-100 text-center"
      onClick={() => setExpanded(!expanded)}
    >
      {displayText}

      {isTruncated && (
        <span className="text-sm text-blue-400 underline ml-1.5 cursor-pointer">
          {expanded ? "Show less" : "Show more"}
        </span>
      )}
    </p>
  );
};

const Home = ({ socialLinks }) => {
  const person = [
    {
      heading: "Creativity",
      icon: <FaCreativeCommonsBy className="text-white size-6" />,
      statement:
        "A visually-driven developer who combines technical skill with artistic vision to craft standout, interactive, and user-centered web experiences.",
    },
    {
      heading: "Professional",
      icon: <SiLinuxprofessionalinstitute className="text-white size-6" />,
      statement:
        "A skilled web developer focused on building robust, responsive websites with clean architecture, performance optimization, and maintainable code.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-5 mt-20" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center mt-120 md:mt-1 justify-between gap-2 h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-blue-400 text-2xl md:text-3xl font-bold text-center mt-3">
            A Journey of making real your ideas and converting them to value
          </h1>
          <p className="font-mono text-blue-100 text-md mt-3 text-center">
            {" "}
            I am a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex items-center justify-between gap-3 ">
            {person.map((persona) => (
              <div className="flex flex-col items-center justify-between gap-2  border-1 rounded-xl border-blue-950 py-4 px-6 hover:-translate-y-2 duration-500 shadow-md shadow-blue-500 hover:bg-blue-950/30">
                <button className="py-2 px-4 border-1 border-blue-950 rounded-2xl">
                  {persona.icon}
                </button>
                <h1 className="text-blue-800 text-xl font-medium">
                  {persona.heading}
                </h1>
                <Statement key={persona.heading} text={persona.statement} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4">
            {socialLinks.map((item, key) => (
              <a
                href={item.link}
                key={key}
                className="text-blue-200 text-3xl m-5 hover:text-blue-700 hover:-translate-1.5 hover:text-4xl transition-all duration-500 ease-in-out"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 m-5 md:m-2">
          <div className="w-[80%] h-auto rounded-[50px] border-3 overflow-hidden shadow-xl hover:scale-105 shadow-blue-700 transition-all duration-600 border-blue-900">
            <img src={image1} alt="sam chris" className="object-cover " />
          </div>
          <p className="mt-5 text-blue-100 text-2xl font-semibold">
            Sam Chris Mboya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
