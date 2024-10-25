import { useState } from "react";
import './taskbar.css'
import { projectList } from './data';


function Taskbar(){

    return(
        <div className = 'taskbar'>
                <StartButton />
                <NameCard />
                <Github link ="https://github.com/R4maa"/>
                <LinkedIn link="https://www.linkedin.com/in/amar-razzaq/"/>
                <Clock />
        </div>
    );
}

export default Taskbar


function StartButton(){

    const [show, setShow] = useState(false);

    function showStartMenu() {
        setShow(!show);
    }

    return(
            <button className = 'startButton' onClick={showStartMenu}>
                <img className="resizeImg" src="xpLogo.png"></img>
                <h2>Start</h2>
                <div className="dropup">
                    { show ? <StartDropUp/> : null }
                </div>
            </button>
    );
}

function StartDropUp(){

    return(
        <div className="dropup-content">
            <h2>Projects Quick Start</h2>
            <hr style={{width: "285px", background: "linear-gradient(to right, #ffd438, #ffdc5e00)"} }></hr>
            <ProjectLink projectIndex={0}/>
            <hr />
            <ProjectLink projectIndex={1}/>
            <hr />
            <ProjectLink projectIndex={2}/>
            <hr />
            <ProjectLink projectIndex={3}/>
        </div>
    );
}

function ProjectLink( {projectIndex} : {projectIndex:any}) {
    const project = projectList[projectIndex];

    return(
        <div className="startLinkStyle">
        <a className="dropup-item" href={project.link} target="_blank">
            <p>{project.name}</p>
        </a>
        </div>
    );
}



function Clock(){
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)
      
    return(
        <div className='clock'>
            <p>{ctime}</p>
        </div>
    );
}


function NameCard() {

    return(
        <div className="nameCard">
            <p>Amar Razzaq</p>
        </div>
    );
}

function Github( {link} : {link:string} ) {

    return (
        <a className = 'taskbarButton' href={link} target="_blank">
            <img className="resizeImg" src="github.png"></img>
            <p>Github</p>
        </a>
    );
}


function LinkedIn( {link} : {link:string} ) {
    
    return (
        <a className = 'taskbarButton' href={link} target="_blank">
            <img className="resizeImg" src="linkedIn.png"></img>
            <p>LinkedIn</p>
        </a>
    );
}