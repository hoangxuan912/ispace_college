import { Routes, Route,  } from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Dangkykhoahoc from './component/Dangkykhoahoc';
import AnNinhMang from './component/AnNinhMang';
import PhatTrienPhanMem from './component/PhatTrienPhanMem';
import ThietKeDoHoa from './component/ThietKeDoHoa';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dangkykhoahoc' element={<Dangkykhoahoc/>} />
        <Route path='/AnNinhMang' element={<AnNinhMang/>} />
        <Route path='/PhatTrienPhanMem' element= {<PhatTrienPhanMem/>} />
        <Route path='/ThietKeDoHoa' element= {<ThietKeDoHoa/>} />
      </Routes>
    </div>
  );
}

export default App;
