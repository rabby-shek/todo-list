import React from 'react'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App;
