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