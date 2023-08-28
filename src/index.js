import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error404 from './pages/Error404';

const App = () => (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/housing/:id' element={<Housing/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);