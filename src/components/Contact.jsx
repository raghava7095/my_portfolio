import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f4yhhcj", // Your Service ID
        "template_g3gx1ni", // Your Template ID
        form.current,
        "dTCL0nOFZgySIcuT9" // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("Failed to send the message. Please try again.");
        }
      );
    e.target.reset();
  };

  const contact_info = [
    {
      logo: "mail",
      text: "raghavadhanukonda709@gmail.com",
      link: "mailto:raghavadhanukonda709@gmail.com?subject=Hello&body=Hi%20Raghava!",
    },
    {
      logo: "logo-whatsapp",
      text: "+91 7794058674",
      link: "https://wa.me/917794058674?text=Hi%20there!",
    },
    {
      logo: "location",
      text: "Visakhapatnam-44",
      link: "https://www.google.com/maps?q=Visakhapatnam-44",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          {/* Form Section */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              required
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
            <p className="text-sm mt-2">{messageStatus}</p>
          </form>

          {/* Contact Info Section */}
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"
                >
                  <ion-icon name={contact.logo}></ion-icon>
                </a>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
