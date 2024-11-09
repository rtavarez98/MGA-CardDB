import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import UserContext from './UserContext';
import './App.css';
import Home from './pages/homePage';

function App() {

    const getAllCall = async () => {
        try{
            let res = await axios.get('http://localhost:3001/getAll') //replace local host w/ actual site

            return res.data;
        } catch(err){
            console.error(err);
      }
    }

    const getIdCall = async (cardData) => {
        try{
            let res = await axios.get('http://localhost:3001/getId', { //replace local host w/ actual site
                    params: {
                            _id: cardData._id 
                    }
            })
            
            return res.data;
        } catch(err){
            console.error(err);
      }
    }

    const getTypeCall = async (cardData) => {
        try{
            let res = await axios.get('http://localhost:3001/getType', { //replace local host w/ actual site
                    params: {
                            type: cardData.type 
                    }
            })

            return res.data;
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
