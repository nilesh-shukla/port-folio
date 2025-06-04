import React from "react";

function Button({buttonName, className}){

    return(
        <button className={className}>{buttonName}</button>
    )

}

export default Button;