import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"

import samlogo from "../images/samlogo.png";

function Dashboard() {



  return (
    <div className=" max-w-xs phone:w-20 h-screen bg-gray-800 text-white flex flex-col gap-5 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-2 py-2 rounded-tr-3xl rounded-br-3xl phone:hidden">
      <div className="flex flex-col gap-3">
        <img
          className="w-28 rounded-full ml-20 mt-10 phone:ml-0 object-fill shadow-2xl shadow-gray-100"
          src={samlogo}
          alt="samlogo.png"
        />
        <h1 className="text-3xl text-center phone:text-sm">Sameer Gaikwad</h1>
        <p className="text-sm text-center phone:text-xs">MERN stack Developer</p>
        <hr className="mt-5" />
      </div>

      <div>
        <ul className="flex flex-col gap-10">
          <li className="cursor-pointer text-center font-extrabold phone:text-xs hover:-translate-y-0.5">
            <a href="#home">HOME</a>
          </li>
          <li className="cursor-pointer text-center font-extrabold phone:text-xs hover:-translate-y-0.5">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="cursor-pointer text-center font-extrabold phone:text-xs hover:-translate-y-0.5">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="cursor-pointer text-center font-extrabold phone:text-xs hover:-translate-y-0.5">
            <a href="#aboutme">ABOUT</a>
          </li>
          <li className="cursor-pointer text-center font-extrabold phone:text-xs hover:-translate-y-0.5">
            <a href="#contactme">CONTACT</a>
          </li>
        </ul>
        <hr className="mt-10" />
      </div>
      <div className="flex gap-10 text-3xl px-3 py-3 phone:text-xl phone:flex-col phone:px-5 ">
        <a href="https://www.instagram.com/sameergaikwad_29/">
          <h1 className="hover:-translate-y-0.5">
            <FaInstagram />
          </h1>
        </a>
        <a href="https://twitter.com/sameergaikwad29">
          <h1 className="hover:-translate-y-0.5">
          <FaTwitter />
          </h1>
        </a>
        <a href="https://www.linkedin.com/in/sameer-gaikwad-61a618226">
          <h1 className="hover:-translate-y-0.5">
            <FaLinkedin />
          </h1>
        </a>
        <a href="https://github.com/VISAM2529">
          <h1 className="hover:-translate-y-0.5">
          <FaGithub/>
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
