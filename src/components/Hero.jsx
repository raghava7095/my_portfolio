import React from "react";
import hero from "../assets/images/hero.png";
import { FaGithub,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
const Hero = () => {
  const social_media = [
    {i:<FaInstagram size="2em"/>,link:"https://www.instagram.com/raghava_.27.03/"},
    {i:<FaGithub size="2em"/>,link:"https://github.com/raghava7095"},
    {i:<FaLinkedin size="2em"/>,link:"https://www.linkedin.com/in/raghava-dhanukonda-9b3243254/"},
    {i:<FaTwitter size="2em"/>,link:"https://twitter.com/Raghava__18"},
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Raghava</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Web Developer
          </h4>
          <a href="#contact"><button className="btn-primary mt-8">Contact Me</button></a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          <ul className="flex items-center gap-5 py-2 text-lg">
            {social_media?.map((icon, i) => (
              <li key={i} className="text-gray-600 hover:text-white cursor-pointer ">
                <a href={icon?.link} target="_blank">{icon?.i}</a>
                
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;