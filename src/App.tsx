import './app.css'
import Header from './Header.jsx'
import Taskbar from './Taskbar.jsx'

function App() {

    return(
      <>
        <div className='background'>
          <Header />
          <Taskbar />
        </div>
      </>
    );
}

export default App



function Background() {

  return(
    <div style={{ 
      backgroundImage: `url('https://ia601007.us.archive.org/13/items/theoriginalfilesofsomewindowswallpapers/bliss%20600dpi.jpg')`,
      backgroundSize: 'cover', // or 'contain'
      backgroundPosition: 'center', // or other values
      minHeight: '100vh', // Ensure the div takes up the full viewport height
      minWidth: '100vw'
    }}>
    </div>
  );
}