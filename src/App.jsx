import About from "./pages/About";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Housing from "./pages/Housing";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/housing/:id' element={<Housing/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;