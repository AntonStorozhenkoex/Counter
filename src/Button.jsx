import React from "react";

const Button = ({str, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>{str}</button>
        </div>
    )
}
export default Button