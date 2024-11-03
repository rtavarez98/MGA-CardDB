import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import UserContext from './UserContext';
import './App.css';
import Home from './pages/homePage';

function App() {

    const getIdCall = async (cardData) => {
        try{
            let res = await axios.get('http://localhost:3001/getId', { //replace local host w/ actual site
                    params: {
                            id: cardData.id 
                    }
            })

        } catch(err){
            console.error(err);
      }
    }

    return (
      <BrowserRouter>
          <UserContext.Provider value={{getIdCall}}>
              <Routes>
                  <Route path="/" element={<Home />}/>
              </Routes>
          </UserContext.Provider>
      </BrowserRouter>
    );
}

export default App;
