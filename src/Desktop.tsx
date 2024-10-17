import './desktop.css'

function Desktop() {

    return(
        <div className='desktop'>
            <DesktopIcon />
            <DesktopIcon />
            <DesktopIcon />
            <DesktopIcon />
        </div>
    );
}

export default Desktop


function DesktopIcon() {
    return(
        <a className='folder' href=''>
            <img className='folderResize' src='./Folder_Icon.svg.png'></img>
        </a>
    );
}