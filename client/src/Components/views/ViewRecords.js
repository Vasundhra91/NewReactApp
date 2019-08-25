import React, { Component } from 'react';
//import axios from 'axios'
class ViewRecords extends Component {
  state = {MaapData: []}

  componentDidMount() {
    fetch('/rangecircles').then(res=> res.json())
     .then(MaapData => this.setState({ MaapData }));
  }

  render() {

    const maaplist= this.state.MaapData.map(maap=>{
      return (
        <div className="row"  key={maap._id} >
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
         {maap.name}
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        {maap.department}
           </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
         {maap.email}
           </div>
        </div>
      )}
     )
     return(
      <div>
         <h1>Customer Details</h1>
        <div className="row" >
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <b>Name</b>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <b>Department</b>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <b>Email</b>
             </div>
          </div>
        {maaplist }
      </div>
    )
  }
}

export default ViewRecords;