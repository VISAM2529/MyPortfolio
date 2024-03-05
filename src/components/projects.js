import React from "react";
function Projects(props){
    return<div>
    <div className="flex flex-wrap gap-14 cursor-pointer">
        <div className="max-w-xs  h-auto phone:w-48 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-3xl px-3 py-3 flex flex-col gap-5 phone:gap-2 phone:-ml-5">
            <img className="w-48 h-40 object-contain ml-14 phone:ml-1"src={props.imgsrc}/>
          
            <div className="flex flex-col gap-5 phone:gap-5">
            <h1 className="text-center font-semibold text-2xl phone:text-xl">{props.name}</h1>
            <hr/>
            <p className="text-center phone:text-xs">{props.desc}</p>
            <a href={props.html} className="text-center bg-green-500 px-3 py-3 rounded-3xl font-semibold shadow-md shadow-gray-800 hover:shadow-inner">view</a>
            </div>
        </div>
    </div>
    </div>
}

export default Projects;