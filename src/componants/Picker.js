import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import icon from '../images/calendar-regular.svg'


/** Modal showed when the employee is created
 * @param {string} text -input type and label content
 * @param {object} date -date in the state employee, used to be shown in the input as an example
 * @param {function} handleInputChange -change the employee state with the input onChange if typed in the input
 * @param {function} handleCustomInputChange -change the employee state with the input onChange if picked in the calendar
 * @param {string} label- label of the input
 * @param {boolean} isOpen- used as a condition to show the dropdown
 * @param {function} handleOpen- close the other opened dropdown or calendars 
 */
function Picker({text,date,handleInputChange,handleCustomInputChange,label,name,isOpen,handleOpen}){
    const [value, setValue] = useState(new Date());
    const [mouseY,setMouseY]=useState('0')

    //Change the employee state when a date is picked in react calendar
    useEffect(() => {
        handleCustomInputChange(name,value.toLocaleDateString())
    }, [value])

    //open the element if clicked, and it appears depends the clicked element position
    function handleClick(e){
        handleOpen(name)
        setMouseY(e.target.offsetTop+21)
    }

    return(
        <div className="calendar-wrapper" >
            <label  htmlFor={label}>{text}
                <img  alt={'calendar icon'}src={icon} className="icon-calendar" onClick={(e)=>(handleClick(e))}></img>
            </label>
            <input required id={label} type="text" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" title="The date must be dd/mm/yyyy" name={name} value={date} onChange={handleInputChange}
               />  
            {isOpen && <div style={{top:mouseY}} className={label}><Calendar  onChange={setValue} value={value}/></div>}
        </div>
    )
}

export default Picker