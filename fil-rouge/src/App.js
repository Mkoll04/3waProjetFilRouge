import './App.css';
import Home from "./components/Home.jsx"
import Products from"./components/Products.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Localisation from "./components/Localisation.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Products" element={<Products/>} />
                <Route path="Localisation" element={<Localisation/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
