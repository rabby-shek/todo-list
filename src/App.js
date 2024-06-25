import React, {useState} from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import './App.css';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        {/* <Sidebar isOpen={isOpen} /> */}
        <Main />
      </div>
    </div>
  )
}

export default App;
