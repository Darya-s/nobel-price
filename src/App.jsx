import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NobelPrize from './NobelPrize';
import Laureate from './Laureate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NobelPrize />} />
        <Route path='/laureate/:id' element={<Laureate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
