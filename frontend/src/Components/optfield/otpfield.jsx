import react,{useEffect,useState} from "react";
import './otpfield.css'

const Optfield=props=>
{
    const handleKeyDown=(event)=>{
        if(event.target.value.length===1)
        {
            const nextInput=document.getElementById("code"+(Number(event.target.name.split("e")[1])+1));
            if(nextInput)
            {
                nextInput.focus();
            }  
        }
        else if(event.target.value.length===0)
        {
            const prevInput=document.getElementById("code"+(Number(event.target.name.split("e")[1])-1));
            if(prevInput)
            {
                prevInput.focus();
            } 
        }
    }
    return(
        <div className="opt-fulldiv">
            <input id="code1" autoFocus={true} type="text" name="code1" maxLength="1" onKeyUp={handleKeyDown} />
            <input id="code2" type="text" name="code2" maxLength="1" onKeyUp={handleKeyDown} />
            <input id="code3" type="text" name="code3" maxLength="1" onKeyUp={handleKeyDown} />
            <input id="code4" type="text" name="code4" maxLength="1" onKeyUp={handleKeyDown} />
            <input id="code5" type="text" name="code5" maxLength="1" onKeyUp={handleKeyDown} />
            <input id="code6" type="text" name="code6" maxLength="1" onKeyUp={handleKeyDown} />
        </div>
    )
}
export default Optfield;