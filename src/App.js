



import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Getstarted } from "./pages/Getstarted";
import { Home } from "./pages/home";
import { Template1 } from "./pages/template1";






function App() {
  
  return (

    <div>
      
        <Routes>
          
          <Route path = "/ok" element={<Home/>}/>
          <Route path = "/ok/get-started" element={<Getstarted/>}/>
          <Route path= "/ok/log-in" element={<Template1/>}/>

        </Routes>
      
    </div>
  );
}

export default App;
