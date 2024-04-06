import React,{useState} from "react";

function Colorpicker()
{
    const[color,setColor]=useState("#FFFFFF");
    function handleoncolor(e)
    {
        setColor(e.target.value);
    }
    return(
        <div className="display-color" style={{backgroundColor:color}}>
            <h1>Color Picker</h1>
            <p>Selected color:{color}</p>
        

        <p> Select a color:</p>
            <input type="color" value={color} onChange={handleoncolor}/>
            </div>
    )
}
export default Colorpicker;