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
    const project = projectList[projectIndex];

    return(
        <div className='folderExternal'>
            <a className='folder' href={project.link} target="_blank">
                <img className='folderResize' src='./Folder_Icon.svg.png'></img>
            </a>
            <p>{project.name}</p>
        </div>
    );
}