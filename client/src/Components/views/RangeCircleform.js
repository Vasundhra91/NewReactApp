import React from 'react';
import axios from 'axios'
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

const newUser={
    name:this.state.name,
    department:this.state.department,
    email:this.state.email
  }
  console.log(newUser);
axios.post('/rangecircles',newUser)

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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>Create Records</h2>
            </div>
        </div>
        <div className='row'>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Name
        <input type="text" id ="Name" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Department
        <input type="text" id ="Department" onChange={this.handleEvent}></input></label>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4  text-center">
        <label>Email
        <input type="text" id ="Email" onChange={this.handleEvent}></input></label>
        </div>
        </div>
        <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center">
        <button type="submit">Submit </button></div>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
       <ViewRecords/>
          </div>
    </form>
  )}

}
export default Maapform;