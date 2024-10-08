import { useState } from "react";

function Taskbar(){

    return(
        <div className = 'taskbar'>
            <footer>
                <StartButton />
                <Clock />
            </footer>
        </div>
    );
}

export default Taskbar


function StartButton(){

    return(
        <button className = 'startButton'>Start</button>
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