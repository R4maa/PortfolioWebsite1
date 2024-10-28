import { useState } from 'react';
import './desktop.css'
import { projectList } from './data';

function Desktop() { 

    return(
        <div className='desktop'>
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
    const project = projectList[projectIndex];  //sets projectIndex to project (for project.name)
    
    const [show, setShow] = useState(false);    // Bool to show project window

    function showProjectWindow() {
        setShow(!show);
    }

    return(
        <>
        <div className='folderExternal'>
            <a className='folder' onClick={showProjectWindow}>
                <img className='folderResize' src='./Folder_Icon.svg.png'></img>
            </a>
            <p>{project.name}</p>
        </div>
        <ProjectWindowControl />
        </>
    );

    function ProjectWindowControl() {
        return(
            <div>
                { show ? <ProjectWindow projectIndex={projectIndex}/> : null }
            </div>
        );
    }

}

function ProjectWindow( {projectIndex} : {projectIndex:any}) {
    const project = projectList[projectIndex];  // Allows project.name to be called

    return(
        <div className='testBox'>
            <p>{projectIndex}</p>
        </div>
    );
}