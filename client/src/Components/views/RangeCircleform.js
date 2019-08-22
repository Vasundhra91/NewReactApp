import React from 'react';
import axios from 'axios'

class Maapform extends React.Component{
    state ={
        
        Name  : null,
        Department : null,
        Email : null
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
    Name:this.state.Name,
    Email:this.state.Email,
    Department:this.state.Department,
  }
axios.post('http://localhost:5000/postRequests',newUser)

// axios.post('/postRequests', {
//     data:this.state,
// 	headers: {
// 	  'Access-Control-Allow-Origin': '*',
// 	},
// 	proxy: {
// 	  host: 'localhost',
// 	  port: '5000'
// 	},
// 	}).then(function (response) {
// 		console.log('response is : ' + response.data);
// 	}).catch(function (error) {
// 		if (error.response) {
// 		  console.log(error.response.headers);
// 		} 
// 		else if (error.request) {
// 	      console.log(error.request);
// 		} 
// 		else {
// 		  console.log(error.message);
// 		}
// 	console.log(error.config);
// });


}

render(){
     return (
    <form onSubmit={this.handleSumbmitEvent}>
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
    </form>
  )}

}
export default Maapform;