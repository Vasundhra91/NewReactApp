import React from 'react';
import RangeCircle from './grid'
class Maapform extends React.Component{
    
    componentDidMount() {
        fetch('/rangecircles').then(res=> res.json())
         .then(MaapData => this.setState({ MaapData }));
      }

    state ={
        name  : null,
        department : null,
        email : null,
        MaapData: []
    }
handleEvent=(e)=>
{
this.setState({
    [e.target.id]: e.target.value
})
}

handleSumbmitEvent=(e)=>
{
e.preventDefault();

const newUser={
    name:this.state.Name,
    email:this.state.Email,
    department:this.state.Department,
  }

  fetch('/rangecircles', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
        'Content-Type': 'application/json'
    }}).then(res => res.json())
    .then(MaapData => this.setState({ MaapData }))
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
 
}

render(){
     return (
    <form onSubmit={this.handleSumbmitEvent} method="post">
        <div className='row'>
       <div className='col-lg-12 col-xl-12 col-md-12 col-xs-12'><h2>Range Master</h2> </div>
     </div>
        <div className='row'>
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Name
        <input type="text" id ="Name" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Department
        <input type="text" id ="Department" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Email
        <input type="text" id ="Email" onChange={this.handleEvent}></input></label>
        </div>
        </div>
        <div className='row'>
            <div className="col-lg-12 col-xl-12 col-md-12 col-xs-12 text-center">
        <button type="submit">Submit </button></div>
        </div>
        <div className='row'>
       <div className='col-lg-12 col-xl-12 col-md-12 col-xs-12'>
       <RangeCircle Maapdetails={this.state.MaapData}/>
          </div>
     </div>
    </form>
  )}

}
export default Maapform;