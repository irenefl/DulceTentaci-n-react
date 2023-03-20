import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './components/atoms/card/card.css'
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cake from './pages/Cake';
import Basket from './components/templates/Basket';



function App() {
  return (
    // <Router>
      <>
     {/* <Home/> */}
     {/* <Cake/> */}
     <Basket/>
      {/* </Router> */}
      </>
  );
}

export default App;

    //   <Header />
    //   <Routes>
    //   <Route path="/home" element={<Home/>}/>
    //   <Route path="/cart" element={<Cart/>}/>
      
    //     </Routes>
    //   <Footer />
    // </Router>