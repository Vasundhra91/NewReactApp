import React, { Component } from 'react';
import RangeCircle from './grid'
class ViewRecords extends Component {
  state = {MaapData: []}

  componentDidMount() {
    fetch('/rangecircles').then(res=> res.json())
     .then(MaapData => this.setState({ MaapData }));
  }
  DeleteMaapdetails=(_id)=>
  { 
   
      fetch( '/rangecircles/'+_id, {
        method: 'delete'
      }).then(res => res.json())
      
  }
    

  render() {
    return(
      <div>
        <RangeCircle Maapdetails={this.state.MaapData} DeleteMaapdetails={this.DeleteMaapdetails} />
        </div>
    )}
}

export default ViewRecords;