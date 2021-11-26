import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
