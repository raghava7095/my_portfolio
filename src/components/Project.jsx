import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";
import {Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Weather App",
      github_link: "https://github.com/raghava7095/weather-app",
      live_link: "https://raghava7095.github.io/weather-app/",
    },
    {
      img: project2,
      name: "Calculator",
      github_link: "https://github.com/raghava7095/Calculator",
      live_link: "https://raghava7095.github.io/Calculator/",
    },
    {
      img: project3,
      name: "Landing Page",
      github_link: "https://github.com/raghava7095/landing-page",
      live_link: "https://raghava7095.github.io/landing-page/",
    },
    {
      img: project4,
      name: "Portfolio",
      github_link:
        "https://github.com/raghava7095",
      live_link: "https://github.com/raghava7095",
    },
    {
      img: project5,
      name: "Login-SignUp",
      github_link: "https://github.com/raghava7095",
      live_link: "https://github.com/raghava7095",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.5}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
              delay:3000,
            }}
            modules={[Pagination]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
