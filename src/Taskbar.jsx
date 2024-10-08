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

// TODO: Add startbutton functionality 
function StartButton(){
    
    return(
        <button className = 'startButton'>
            <img className="resizeStartImg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94ff4db7-7a6a-4aa4-8d78-3a2aaa5bd6c4/ddir3zk-9146cc22-085f-4638-92d8-011e03cdf085.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0ZmY0ZGI3LTdhNmEtNGFhNC04ZDc4LTNhMmFhYTViZDZjNFwvZGRpcjN6ay05MTQ2Y2MyMi0wODVmLTQ2MzgtOTJkOC0wMTFlMDNjZGYwODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1bMTDRN3t9f2G9yTLWTxImNfg-r3VJEaOqHb1K88Fi4"></img>
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