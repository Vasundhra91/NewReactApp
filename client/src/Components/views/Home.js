import React, { Component } from 'react'
import homeimg from '../../images/img_Aircraft.jpg'
export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="row">
                   <div style={{background:"blue",width:"100%"}} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h2>Maap Range Circle</h2>
                   </div>
               </div>
               <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src={homeimg}></img>
            </div>
            </div>
            
          </div>
        )
    }
}
