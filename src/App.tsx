import './app.css'
import Desktop from './Desktop.tsx'
import Taskbar from './Taskbar.tsx'

function App() {

    return(
      <>
      <div className='allStyle'>
        <div className='background'>
          <Desktop />
          <Taskbar />
        </div>
      </div>
      </>
    );
}

export default App



function Background() {

  return(
    <div style={{ 
      backgroundImage: `url('https://ia601007.us.archive.org/13/items/theoriginalfilesofsomewindowswallpapers/bliss%20600dpi.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      minWidth: '100vw'
    }}>
    </div>
  );
}