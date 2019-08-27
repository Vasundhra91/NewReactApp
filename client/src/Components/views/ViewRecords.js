import React, { Component } from 'react';
import RangeCircle from './grid'
class ViewRecords extends Component {
  state = {MaapData: []}

  componentDidMount() {
    fetch('/rangecircles').then(res=> res.json())
     .then(MaapData => this.setState({ MaapData }));
  }
  DeleteMaapdetails=(_id)=>
  {   fetch('/rangecircles/'+_id, {
    method: 'delete',
    headers: {
        'Content-Type': 'application/json'
    }}).then(res => res.json())
    .then(MaapData => this.setState({ MaapData }))
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
 
} 
render() {
    return(
      <div>
        <RangeCircle Maapdetails={this.state.MaapData} DeleteMaapdetails={this.DeleteMaapdetails} />
        </div>
    )}
}

export default ViewRecords;