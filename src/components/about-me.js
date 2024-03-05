import React from "react";
import samlogo from '../images/samlogo.png'
function AboutMe(){
    return <div className="flex flex-col flex-wrap gap-16 phone:gap-10">
        <div className="flex flex-col items-center gap-5 phone:gap-3">
        <h1 className="text-5xl text-black  font-semibold text-center phone:text-2xl">About Me</h1>
        <hr className="w-72 phone:w-48"/>
        </div>
        <div className="flex justify-around flex-wrap phone:gap-5">
        <h1 className="max-w-sm text-3xl text-center px-3 py-3 phone:text-xl">
            Hii I am Sameer Gaikwad.I completed my work with basic MERN stack development and going ahead with NEXT JS development.Hope you like my work done so far.Be with me Thank You!
        </h1>
        <img className="max-w-xs shadow-2xl shadow-slate-900 rounded-md phone:w-48"src={samlogo}/>
        </div>
    
    </div>
}

export default AboutMe;