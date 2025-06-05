import React from "react";

function Button({buttonName, className}){

    return(
        <button className={className} style={{fontWeight:500}}>{buttonName}</button>
    )

}

export default Button;