import './desktop.css'
import { projectList } from './projects';

function Desktop() { 

    return(
        <div className='desktop'>
            <div className='folderLayout'>
                <DesktopIcon projectName={projectList[0].name}/>
                <DesktopIcon projectName="project2"/>
                <DesktopIcon projectName="project3"/>
                <DesktopIcon projectName="project4"/>
            </div>
        </div>
    );
}

export default Desktop


function DesktopIcon( {projectName} : {projectName:any} ) {
    return(
        <div className='folderExternal'>
            <a className='folder' href='#' target="_blank">
                <img className='folderResize' src='./Folder_Icon.svg.png'></img>
            </a>
            <p>{projectName}</p>
        </div>
    );
}