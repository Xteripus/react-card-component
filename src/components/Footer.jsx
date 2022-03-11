import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-[#161619] flex items-center justify-center gap-5 py-4">
      <a
        href="#"
        target="_blank"
        className="text-gray-400 hover:text-white transition ease-in-out duration-300"
      >
        <FaTwitter size={"1.7rem"} />
      </a>
      <a
        href="#"
        target="_blank"
        className="text-gray-400 hover:text-white transition ease-in-out duration-300"
      >
        <FaFacebook size={"1.7rem"} />
      </a>
      <a
        href="#"
        target="_blank"
        className="text-gray-400 hover:text-white transition ease-in-out duration-300"
      >
        <FaInstagram size={"1.7rem"} />
      </a>
      <a
        href="#"
        target="_blank"
        className="text-gray-400 hover:text-white transition ease-in-out duration-300"
      >
        <FaGithub size={"1.7rem"} />
      </a>
    </div>
  );
}
