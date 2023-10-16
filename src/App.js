import {HashRouter, Routes, Route} from 'react-router-dom';
import './components/style.css'
import Navbar from './components/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home , About, Info, Upload, Contact} from './components/navcomponents';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;