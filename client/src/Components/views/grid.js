import React from 'react';

    const RangeCircle = ({Maapdetails ,DeleteMaapdetails})=> {
    const maaplist= Maapdetails.map(maap=>{
        return (
            <div className="row" key ={maap._id}>
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
             <div>{maap.name}</div>
             </div>
             <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
             <div>{maap.department}</div>
               </div>
               <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
             <div>{maap.email}</div>
               </div>
               <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
               <button onClick={()=>{DeleteMaapdetails(maap._id)} }> Delete Item </button></div>
            </div>
          )}
         )
         return(
          <div>
             <h1>Customer Details</h1>
            <div className="row" >
              <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
               <div><b>Name</b></div>
               </div>
               <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
               <div><b>Department</b></div>
                 </div>
                 <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
               <div><b>Email</b></div>
                 </div>
                 <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
               <div><b>Delete</b></div>
                 </div>
              </div>
            {maaplist }
          </div>
        )

}
export default RangeCircle;