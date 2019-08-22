import React from 'react';
import NavBar from './Components/Layout/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Maaprange from'./Components/views/RangeCircleform'
import ViewRecords from'./Components/views/ViewRecords'

function App() {
  return (
    <div className="App">
      <div className='row'>
       <div className='col-lg-12'> <NavBar/> </div>
     </div>
     <div className='row'>
       <div className='col-lg-12'><h2>Range Master</h2> </div>
     </div>
     <div className='row'>
       <div className='col-lg-12'>
       <Maaprange/>
          </div>
     </div>
     <div className='row'>
       <div className='col-lg-12'>
       <ViewRecords/>
          </div>
     </div>
    </div>
  );
}

export default App;
