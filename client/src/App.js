import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import UserContext from './UserContext';
import './App.css';
import Home from './pages/homePage';

function App() {

    const getAllCall = async () => {//return res data
        try{
            let res = await axios.get('http://localhost:3001/getAll') //replace local host w/ actual site

            return res.data;
        } catch(err){
            console.error(err);
      }
    }

    const getIdCall = async (cardData) => {//return res data
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

    const getTypeCall = async (cardData) => {//return res data
        try{
            let res = await axios.get('http://localhost:3001/getType', { //replace local host w/ actual site
                    params: {
                            type: cardData.type 
                    }
            })

            

        } catch(err){
            console.error(err);
      }
    }

    return (
      <BrowserRouter>
          <UserContext.Provider value={{getAllCall, getIdCall, getTypeCall}}>
              <Routes>
                  <Route path="/" element={<Home />}/>
              </Routes>
          </UserContext.Provider>
      </BrowserRouter>
    );
}

export default App;
