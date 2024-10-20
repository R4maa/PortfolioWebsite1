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
            <h2>Projects</h2>
            {/* ------------------------------------------------- Maybe add <hr> here for seperation and style? */}
            <a className="dropup-item" href="#">
                <p>Link 1</p>
            </a>
            <a className="dropup-item" href="#">
                <p>Link 2</p>
            </a>
            <a className="dropup-item" href="#">
                <p>Link 3</p>
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
        <a className = 'taskbarButton' href={link}>
            <img className="resizeImg" src="github.png"></img>
            <p>Github</p>
        </a>
    );
}


function LinkedIn( {link} : {link:string} ) {
    
    return (
        <a className = 'taskbarButton' href={link}>
            <img className="resizeImg" src="linkedIn.png"></img>
            <p>LinkedIn</p>
        </a>
    );
}