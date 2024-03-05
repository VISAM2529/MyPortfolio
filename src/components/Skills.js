import React from "react";
import figma from '../images/figma.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import mongo from "../images/mongodb.gif"
import node from "../images/nodejs.png"
import express from "../images/express.png"
function Skills(){
    return<div className="flex flex-col justify-center gap-16 phone:gap-5">
        <div className="flex flex-col items-center gap-5 phone:gap-3">
        <h1 className="text-5xl text-black  font-semibold text-center phone:text-2xl">SKILLS</h1>
        <hr className="w-72 phone:w-48"/>
        </div>
        <div className="flex justify-center flex-wrap gap-16">
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={html}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={css}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={js}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={tailwind}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={mongo}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={react}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={express}/>
            <img className="w-48 h-36 object-contain phone:w-14 phone:h-26"src={node}/>
        </div>
       
    </div>
}
export default Skills;