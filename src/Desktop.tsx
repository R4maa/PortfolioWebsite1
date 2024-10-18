import './desktop.css'

function Desktop() {

    return(
        <div className='desktop'>
            <div className='folderLayout'>
                <DesktopIcon />
                <DesktopIcon />
                <DesktopIcon />
                <DesktopIcon />
            </div>
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