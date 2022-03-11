import React from "react";
import Eren from "../images/Photo.jpg";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Info() {
  return (
    <>
      <img
        className="w-full h-[300px] mx-auto object-cover object-center"
        src={Eren}
        alt="Eren"
      />
      <div className="px-9 mb-6">
        <div className="text-white text-center my-5">
          <h1 className="text-3xl font-bold">Eren Gelgeç</h1>
          <p className="text-sm text-orange-300">Frontend Developer</p>
          <a className="text-xs" href="https://erengelgec.dev" target="_blank">
            erengelgec.dev
          </a>
        </div>
        <div className="text-white flex justify-between gap-4 ">
          <a
            className="flex items-center justify-center w-1/2 py-1 px-5 bg-white border rounded-md"
            href="#"
            target="_blank"
          >
            <FaEnvelope color="black" className="mr-2 text-xs flex-shrink-0" />
            <span className="text-black text-sm">Email</span>
          </a>
          <a
            className="flex items-center justify-center w-1/2 py-1 px-5 bg-[#5093E2] rounded-md"
            href="#"
            target="_blank"
          >
            <FaLinkedin className="mr-2 rounded-md flex-shrink-0" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
}
