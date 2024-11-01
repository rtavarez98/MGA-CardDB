import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/homePage';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
