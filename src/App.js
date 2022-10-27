import React,{useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Dashbord from './components/Dashbord';
import Inscription from './components/Inscription'
import Login from './components/Login';
function App(props) {
  const initailStagaires = localStorage.getItem("stagaires")? JSON.parse(localStorage.getItem("stagaires")):[]
  const [stagaires,setStagaires] = useState(initailStagaires)
  const addStagaire = (stagaire) =>{
    const newStagaire = [...stagaires,stagaire]
    setStagaires(newStagaire)
    
  }
  useEffect(() => {
    localStorage.setItem("stagaires",JSON.stringify(stagaires))
    return () => {
      console.log('component will unmout')
    };
  }, [stagaires])
 
  return (
  <div>
    
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route className="inscription" path='/' element={<Inscription addStagaire={addStagaire} stagaires={stagaires}/>} />
          <Route className="login" path='/login' element={<Login/>} />
          <Route className="dashbord" path='/dashbord' element={<Dashbord/>}/>
         
        </Routes>
      </div>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
