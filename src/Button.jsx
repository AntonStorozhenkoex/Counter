import React from "react";

const Button = ({titleButton, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>{titleButton}</button>
        </div>
    )
}
export default Button