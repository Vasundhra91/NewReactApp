import React, { Component } from 'react';
//import axios from 'axios'
class ViewRecords extends Component {
  state = {MaapData: []}

  componentDidMount() {
    fetch('/rangecircles').then(res=> res.json())
     .then(MaapData => this.setState({ MaapData }));
        console.log(this.state.MaapData)
  }

  render() {

    const maaplist= this.state.MaapData.map(maap=>{
      return (
        <div className="row"  key={maap._id} >
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
         <div>{maap.name}</div>
         </div>
         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
         <div>{maap.department}</div>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
         <div>{maap.email}</div>
           </div>
        </div>
      )}
     )
     return(
      <div>
         <h1>Customer Details</h1>
        <div className="row" >
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <div><b>Name</b></div>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <div><b>Department</b></div>
             </div>
             <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
           <div><b>Email</b></div>
             </div>
          </div>
        {maaplist }
      </div>
    )
  }
}

export default ViewRecords;