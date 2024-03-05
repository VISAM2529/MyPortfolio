//IMPORT IMAGES
import todo from "./images/ProjectsImg/todo.jpg"
import weather from "./images/ProjectsImg/weather.jpg"
import multi from "./images/ProjectsImg/multi.jpg"
import ecart from "./images/ProjectsImg/ecart.jpg"
import pmt from "./images/ProjectsImg/pmt.jpg"


//IMPORT HTML FILES



const Projects=[
    {
        key:1,
        imgsrc:todo,
        name:"TODO APP",
        desc:"It's a simple TODO application created using REACT JS.",
        html:"https://doit-sameer.netlify.app/"
    },
    {
        key:2,
        imgsrc:weather,
        name:"WEATHER NOW",
        desc:"It is a REACT JS application to show the current weather from world wide using location's lattitude and longitude",
        html:"https://weather-now-sg.netlify.app/"
    },
    {
        key:3,
        imgsrc:multi,
        name:"MULTILIST FORM",
        desc:"This application is created using REACT JS to work on REACT special feature called ROUTERS",
        html:"https://multilist-fom.netlify.app/"
    },
    {
        key:4,
        imgsrc:ecart,
        name:"E-commerce Template",
        desc:"This application is created using MERN to elaborate the basic use of CRUD Operations",
        html:"https://e-cart-sameer.netlify.app/"
    },
    {
        key:5,
        imgsrc:pmt,
        name:"Project Management Tool",
        desc:"This application is created using MERN to show the basic fundamentals of MERN stack Development",
        html:"https://project-managementt-tool.netlify.app/"
    }

];
export default Projects;