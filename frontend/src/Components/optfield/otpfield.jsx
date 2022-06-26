import react,{useEffect,useState} from "react";
import './otpfield.css'

const Optfield=({onSubmit})=>
{
    const [keyPos,setKeyPos]=useState(1);
    useEffect(()=>{
        const nextInput=document.getElementById(`code${keyPos}`);
        if(nextInput)nextInput.focus();
    },[keyPos])
    const handleKeyDown=(event)=>{
        if((event.keyCode===9 || event.target.value.length===1) ){
            if(keyPos<6)
                setKeyPos(s=>s+1);
            else{
                let str='';
                for (let i = 1; i <= 6; i++) {
                    const element =  document.getElementById(`code${i}`);
                    if(element)
                        str=`${str}${element.value}`;
                }
                onSubmit && onSubmit(str);
            }
        }
        else if((event.keyCode===8)&& keyPos>1)setKeyPos(s=>s-1);
    }
    const handleKeyClick=event=>{
        const name=event.target.name;
        if(name){
            setKeyPos(+name.split('e')[1]);
        }
    }
    return(
        <div className="opt-fulldiv">
            <input id="code1" autoFocus={true} type="text" name="code1" maxLength={1} onClick={handleKeyClick} onKeyUp={handleKeyDown} />
            <input id="code2" autoSave="false" type="text" name="code2" maxLength="1" onClick={handleKeyClick} onKeyUp={handleKeyDown} />
            <input id="code3" type="text" name="code3" maxLength={1} onClick={handleKeyClick} onKeyUp={handleKeyDown} />
            <input id="code4" type="text" name="code4" maxLength="1" onClick={handleKeyClick} onKeyUp={handleKeyDown} />
            <input id="code5" type="text" name="code5" maxLength="1" onClick={handleKeyClick} onKeyUp={handleKeyDown} />
            <input id="code6" type="text" name="code6" maxLength={1} onClick={handleKeyClick} onKeyUp={handleKeyDown} />
        </div>
    )
}
export default Optfield;