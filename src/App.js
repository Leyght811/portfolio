
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} />
      
    </div>
  );
}

export default App;
