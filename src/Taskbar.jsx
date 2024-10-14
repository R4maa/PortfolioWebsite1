import { useState } from "react";
import './taskbar.css'

function Taskbar(){

    return(
        <div className = 'taskbar'>
            <footer>
                <StartButton />
                <NameCard />
                <Clock />
            </footer>
        </div>
    );
}

export default Taskbar

// TODO: Add startbutton functionality 
function StartButton(){
    
    return(
        <button className = 'startButton'>
            <div className="center">
                <h2><img className="resizeStartImg" src="xpLogo.png"></img>Start</h2>
            </div>
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