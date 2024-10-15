import { useState } from "react";
import './taskbar.css'

function Taskbar(){

    return(
        <div className = 'taskbar'>
                <StartButton />
                <NameCard />
                <Github />
                <Clock />
        </div>
    );
}

export default Taskbar

// TODO: Add startbutton functionality 
function StartButton(){
    
    return(
        <button className = 'startButton'>
                <img className="resizeStartImg" src="xpLogo.png"></img>
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

function Github() {
    return (
        <a className = 'githubButton' href="https://github.com/R4maa">
            <img className="resizeStartImg" src="github.png"></img>
            <p>Github</p>
        </a>
        
    );
}