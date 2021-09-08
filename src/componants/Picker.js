import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Picker({text,date,handleInputChange,handleCustomInputChange,label,name,isOpen,handleOpen}){
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        handleCustomInputChange(name,value.toLocaleDateString())
    }, [value])


    return(
        <div className="calendar-wrapper" >
            <label  htmlFor={label}>{text} <i className="far fa-calendar icon-calendar" onClick={()=>(handleOpen(name))}></i></label>
            <input required id={label} type="text"  pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" title="The date must be dd/mm/yyyy" name={name} value={date} onChange={handleInputChange}
               />
              
            {isOpen && <div class={"calendar-container"}><div className={label}><Calendar  onChange={setValue} value={value}/></div></div>}
        </div>
    )
}

export default Picker