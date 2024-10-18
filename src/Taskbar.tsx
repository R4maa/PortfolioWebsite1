import { useState } from "react";
import './taskbar.css'

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

// TODO: Add startbutton functionality 
function StartButton(){

    return(
        <button className = 'startButton'>
            <img className="resizeImg" src="xpLogo.png"></img>
            <h2>Start</h2>
        </button>
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

function Github( {link} ) {

    return (
        <a className = 'taskbarButton' href={link}>
            <img className="resizeImg" src="github.png"></img>
            <p>Github</p>
        </a>
    );
}


function LinkedIn( {link} ) {

    return (
        <a className = 'taskbarButton' href={link}>
            <img className="resizeImg" src="linkedIn.png"></img>
            <p>LinkedIn</p>
        </a>
    );
}