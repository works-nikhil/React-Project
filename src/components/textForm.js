import React, { useState } from 'react'




export default function TextForm(props) {
    const handleOnChange = ()=> {
        
        setText("You have clicked on handleOnChange")
    }

    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
        setText("You have clicked handleUpClick");
        
    }



    const [text, setText] = useState("Enter Text Here");
    
    return (
        <div>
            <div className="mb-3">
                
                <h1>{props.heading}</h1>
                <textarea id="myBox" value={text} onChange={handleOnChange} className="form-control" rows="8"></textarea>

            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}