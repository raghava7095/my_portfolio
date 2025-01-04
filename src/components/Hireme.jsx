import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Are you looking for a dedicated and skilled developer to bring your ideas to life? Let’s collaborate!

With expertise in ReactJS, Tailwind CSS, and MERN stack development, I can help you build user-friendly, scalable, and visually appealing web applications. Whether it’s creating interactive front-end designs, developing full-stack solutions, or solving challenging technical problems, I’m here to contribute.

Feel free to reach out if you:

Have a project that needs attention.
Want to collaborate on something innovative.
Need a frontend/backend developer for your team.
Let’s work together to turn your vision into reality! 🚀
      </p>
          <a href="#contact"><button className="btn-primary mt-10">Say Hello</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;