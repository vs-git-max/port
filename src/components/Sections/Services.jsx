import React from "react";

const Services = ({ services }) => {
  return (
    <section className="max-w-7xl mx-auto p-5" id="services">
      <div className=" mt-8 bg-[#0e0d0d] p-6 min-h-fit py-20">
        <h2 className="font-bold text-2xl text-blue-700 text-center mb-8">
          Services
        </h2>

        <div className="grid items-center justify-between gap-8 grid-cols-1  md:grid-cols-3">
          {services.map((service, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-between gap-8 border-2 shadow-md shadow-blue-950 hover:shadow-xl border-blue-950 hover:-translate-y-2 py-6 px-4 rounded-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden rounded-2xl ">
                <img
                  src={service.image}
                  alt={service.service}
                  className="object-cover "
                />
              </div>
              <h3 className="text-lg text-blue-700 font-medium">
                {service.service}
                <p className="text-blue-100 font-mono mt-3 mb-3">
                  {service.statement}
                </p>
                <a
                  href="#contact"
                  className="text-blue-500 underline font-extralight"
                >
                  {service.action}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
