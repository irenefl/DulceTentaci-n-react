import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Cakes from './components/Cakes';
import Cookies from './components/Cookies';
import Bread from './components/Bread';



function App() {
  return (
    <Router>
      
      <h1>¿Qué te apetece hoy?</h1>
      
      <div className="products-container">
        <Cakes 
          name="Pastel de chocolate"
          image="cake.jpg" 
        />
        <Cookies 
          name="Pastas"
          image="cookies.jpg" 
        />
        <Bread 
          name="Pan"
          image="bread.jpg" 
        />
      </div>
      </Router>
  );
}

export default App;

      <Header />
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
        </Routes>
      <Footer />
    </Router>