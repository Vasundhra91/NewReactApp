import React from 'react';
import ViewRecords from'./ViewRecords';
class Maapform extends React.Component{
    state ={
        name  : null,
        department : null,
        email : null
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
console.log(this.state);
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
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
}

render(){
     return (
    <form onSubmit={this.handleSumbmitEvent} method="post">
        <div className='row'>
       <div className='col-lg-12'><h2>Range Master</h2> </div>
     </div>
        <div className='row'>
            <div className="col-lg-4  text-center">
        <label>Name
        <input type="text" id ="Name" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4  text-center">
        <label>Department
        <input type="text" id ="Department" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4  text-center">
        <label>Email
        <input type="text" id ="Email" onChange={this.handleEvent}></input></label>
        </div>
        </div>
        <div className='row'>
            <div className="col-lg-12 text-center">
        <button type="submit">Submit </button></div>
        </div>
        <div className='row'>
       <div className='col-lg-12'>
       <ViewRecords/>
          </div>
     </div>
    </form>
  )}

}
export default Maapform;