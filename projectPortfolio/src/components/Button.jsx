import React from "react";

function Button({buttonName, className, children}){

    return(
        <button className={className} style={{fontWeight:500}}>
            {buttonName}
            {children}
        </button>
    )

}

export default Button;