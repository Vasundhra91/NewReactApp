import React from 'react';

    const RangeCircle = ({Maapdetails })=> {
    const maaplist= Maapdetails.map(maap=>{
        return (
            <div className="row"  key={maap._id} >
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
             <div>{maap.name}</div>
             </div>
             <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
             <div>{maap.department}</div>
               </div>
               <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
             <div>{maap.email}</div>
               </div>
            </div>
          )}
         )
         return(
          <div>
             <h1>Customer Details</h1>
            <div className="row" >
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
               <div><b>Name</b></div>
               </div>
               <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
               <div><b>Department</b></div>
                 </div>
                 <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-xs-4">
               <div><b>Email</b></div>
                 </div>
              </div>
            {maaplist }
          </div>
        )

}
export default RangeCircle;