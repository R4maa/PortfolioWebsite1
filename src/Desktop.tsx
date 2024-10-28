import { useState } from 'react';
import './desktop.css'
import { projectList } from './data';

function Desktop() { 

    return(
        <div className='desktop'>
                {/* <ProjectWindow /> */}
            <div className='folderLayout'>
                <DesktopIcon projectIndex={0}/>
                <DesktopIcon projectIndex={1}/>
                <DesktopIcon projectIndex={2}/>
                <DesktopIcon projectIndex={3}/>
            </div>
        </div>
    );
}

export default Desktop


function DesktopIcon( {projectIndex} : {projectIndex:any} ) {
    const project = projectList[projectIndex];
    
    const [show, setShow] = useState(false);

    function showProjectWindow() {
        setShow(!show);
        console.log(show);
        console.log("hello");
    }

    return(
        <>
        <div className='folderExternal'>
            {/* <a className='folder' href={project.link} target="_blank"> */}
            <a className='folder' onClick={showProjectWindow}>
                <img className='folderResize' src='./Folder_Icon.svg.png'></img>
            </a>
            <p>{project.name}</p>
        </div>
        <ProjectWindow2 />
        </>
    );

    function ProjectWindow2() {
        return(
            <div>
                { show ? <ProjectWindow/> : null }
            </div>
        );
    }

}

function ProjectWindow() {

    return(
        <div className='testBox'>
            
        </div>
    );
}