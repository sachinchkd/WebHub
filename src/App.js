



import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Getstarted } from "./pages/Getstarted";
import { _home } from "./pages/home";






function App() {
  
  return (

    <div>
      
        <Routes>
          
        <Route path = "/ok" element={<_home/>}/>
          <Route path = "/ok/get-started" element={<Getstarted/>}/>
          <Route path= "/ok/log-in" element={<Login/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
