import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const ConnectIcon = ({ text, Icon, url }) => {
  return (
    <div className="flex items-center bg-white shadow-lg w-full max-w-[300px] md:max-w-[350px] h-[100px] p-6 rounded-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 space-x-6">
      <Icon className="text-5xl text-blue-500" />
      <a
        className="text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

function Contact() {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-center p-2  font-dancing-script m-5 text-white text-3xl">
        Let's Connect
      </h2>

      <div className="flex flex-col m-5 md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        <ConnectIcon
          text="LinkedIn"
          Icon={FaLinkedinIn}
          url={"https://www.linkedin.com/in/pradeep-kalyan/"}
        />
        <ConnectIcon
          text="Github"
          Icon={FaGithubSquare}
          url={"https://github.com/pradeep-kalyan"}
        />
        <ConnectIcon
          text="Whatsapp"
          Icon={FaWhatsapp}
          url={"https://wa.link/5jkt3k"}
        />
      </div>
    </div>
  );
}

export default Contact;
