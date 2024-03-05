import React from "react";
import back from '../images/back.jpg'

function Home(){
    return <div className="w-screen phone:h-56  h-screen" style={{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover"}}>
       <div className="flex flex-col gap-5 phone:gap-2 px-28 py-56 phone:px-10 phone:py-14 text-white  ml-64 phone:ml-0  ">
       <h1 className="text-5xl phone:text-xl font-bold ">Sameer Gaikwad</h1>
       <p className="text-lg phone:text-xs">MERN stack Developer</p>
       </div>
    </div>
}

export default Home;