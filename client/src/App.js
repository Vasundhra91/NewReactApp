import React from 'react';
import NavBar from './Components/Layout/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className='row'>
       <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'> <NavBar/> </div>
     </div>
    </div>
  );
}

export default App;
