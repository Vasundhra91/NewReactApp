import React, { Component } from 'react';
import RangeCircle from './grid'
class ViewRecords extends Component {
  state = {MaapData: []}

  componentDidMount() {
    fetch('/rangecircles').then(res=> res.json())
     .then(MaapData => this.setState({ MaapData }));
  }

  render() {
    return(
      <div>
        <RangeCircle Maapdetails={this.state.MaapData}/>
      
        </div>
    )}
}

export default ViewRecords;