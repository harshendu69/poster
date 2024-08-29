import Navbar from "./Navbar"
import './app.css'
import Sidebar from "./sidebar"
import Custom from "./pages/Custom"
import Developer from "./pages/Developer"
import Profile from "./pages/profile"
import Home from "./pages/Home"
import Car from "./pages/sub-pages/car"
import Modern from "./pages/sub-pages/modern"
import Abstract from "./pages/sub-pages/abstract"
import Office from "./pages/sub-pages/office"
import Relaxing from "./pages/sub-pages/relaxing"
import EnlargedImagePage from "./sidepages/enlargedimagepage";
import { Route, Routes } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useParams,useLocation } from "react-router-dom";


function App() {
  useLocation();
  useParams();
  return (
    <>
     
    
      <Navbar />
      <PayPalScriptProvider  options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div className="App main-content" style={{margin:"0px",padding:"0px"}}>
        <Routes>
          <Route path="/poster" element={<Home />} />
          <Route path="/poster/home" elements={<Home />} />
          <Route path="/poster/custom" element={<Custom />} />
          <Route path="/poster/developer" element={<Developer />} />
          <Route path="/poster/profile" element={<Profile />} />
          <Route path="/poster/car" element={<Car/>}/>
          <Route path="/poster/modern" element={<Modern/>}/>
          <Route path="/poster/abstract" element={<Abstract/>}/>
          <Route path="/poster/office" element={<Office/>}/>
          <Route path="/poster/relaxing" element={<Relaxing/>}/>
          <Route path="/poster/enlarged-image/:imageUrl" element={<EnlargedImagePage />} />
        </Routes>
        
      </div>
      </PayPalScriptProvider>
      
    </>
    

    
  )
}

export default App