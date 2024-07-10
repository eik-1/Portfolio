import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"

function App() {
    const name = `                                                                                                 
EEEEEEEEEEEEEEEEEEEEEE  iiii  kkkkkkkk           
E::::::::::::::::::::E i::::i k::::::k           
E::::::::::::::::::::E  iiii  k::::::k           
EE::::::EEEEEEEEE::::E        k::::::k           
  E:::::E       EEEEEEiiiiiii  k:::::k    kkkkkkk
  E:::::E             i:::::i  k:::::k   k:::::k 
  E::::::EEEEEEEEEE    i::::i  k:::::k  k:::::k  
  E:::::::::::::::E    i::::i  k:::::k k:::::k   
  E:::::::::::::::E    i::::i  k::::::k:::::k    
  E::::::EEEEEEEEEE    i::::i  k:::::::::::k     
  E:::::E              i::::i  k:::::::::::k     
  E:::::E       EEEEEE i::::i  k::::::k:::::k    
EE::::::EEEEEEEE:::::Ei::::::ik::::::k k:::::k   
E::::::::::::::::::::Ei::::::ik::::::k  k:::::k  
E::::::::::::::::::::Ei::::::ik::::::k   k:::::k 
EEEEEEEEEEEEEEEEEEEEEEiiiiiiiikkkkkkkk    kkkkkkk
                                                `
    console.log(name)
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blogs" element={<Blog />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
