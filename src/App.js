import './App.css';
import Navbar from './components/Navbar'
import Overlay from './components/Overlay';
import Sidebar from './components/Sidebar';
import Chatbot from './components/chatbot';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
 < Chatbot/>
 <Routes>

 </Routes>
    <Navbar />
    <Overlay/>
    <Sidebar/>
  </BrowserRouter>
  );
}

export default App;