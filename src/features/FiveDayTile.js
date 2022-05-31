import React from "react";

const FiveDayTile = (day = []) => {

    // if(day.length > 0)
        return (
        
            <div>
                <h1>{day.date}</h1>
            </div>
        )
    // else
    // return (
    //     <div>
    //         <h2 style={{color:'red'}}>invalid entry</h2>
    //     </div>
    // )

}

export default FiveDayTile