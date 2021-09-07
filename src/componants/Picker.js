import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Picker({text,date,handleCustomInputChange,label,name,isOpen,handleOpen}){

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        handleCustomInputChange(name,value.toLocaleDateString())
    }, [value])


    return(
        <div >
            <label htmlFor={label}>{text}</label>
            <input required id={label} type="text"  name={name} value={date}
              onClick={()=>handleOpen(name)} />
            {isOpen &&<Calendar  onChange={setValue} value={value}/>}
        </div>
    )
}

export default Picker