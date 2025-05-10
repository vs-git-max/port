import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Projects = ({ projects }) => {
  return (
    <section className="max-w-7xl mx-auto" id="projects">
      <div className="w-full min-h-fit mt-8 p-5 flex items-center justify-between flex-col gap-5">
        <h2 className="text-blue-700 text-center text-2xl font-bold">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6">
          {projects.map((project, index) => (
            <div
              className="flex flex-col items-center justify-between gap-4 border-2 shadow-sm shadow-blue-950 hover:shadow-md border-blue-950 hover:-translate-y-3 py-6 px-4 rounded-2xl transition-all duration-500"
              key={index}
            >
              <h2 className="text-lg text-blue-700 font-medium">
                {project.label}
              </h2>
              <div className="aspect-square overflow-hidden rounded-2xl ">
                <img
                  src={project.image}
                  alt={project.service}
                  className="object-cover "
                />
              </div>
              <a
                href={project.link}
                className="text-blue-500 underline font-extralight"
              >
                Click to view in github
              </a>
              <Separator />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center sm:grid-cols-2 gap-4 ">
                {project.tech.map((item, key) => (
                  <Button
                    className="bg-transparent border-2 border-blue-950 rounded-2xl cursor-pointer"
                    key={key}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
