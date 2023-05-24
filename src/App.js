



import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Getstarted } from "./pages/Getstarted";
import { Home } from "./pages/home";
import { Template1 } from "./pages/template1";
import { Template2 } from "./pages/template2";
import { CategoryListTemplate2 } from "./components/template2/category_list";
import { CategoryCardTemplate2 } from "./components/template2/category_template2";







function App() {
  
  return (

    <div>
      
        <Routes>
          
          <Route path = "/ok" element={<Home/>}/>
          <Route path = "/ok/get-started" element={<Getstarted/>}/>
          <Route path= "/ok/log-in" element={<Login/>}/>
          <Route path = "/template1" element={<Template1/>}/>
          <Route path = "/template2" element={<Template2/>}/>
          <Route path = "/template2/category" element={<CategoryListTemplate2/>}/>
          <Route path = "/template2/category/category-card" element={<CategoryCardTemplate2/>}/>


        </Routes>
      
    </div>
  );
}

export default App;
