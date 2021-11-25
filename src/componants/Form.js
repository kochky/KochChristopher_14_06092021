import React, { useState,useEffect} from 'react'
import { StatesData } from "../data/StatesData";
import ConfirmationMessage from "./ConfirmationMessage";
import Dropdown from './Dropdown';
import {Departments} from '../data/Departement';
import Picker from './Picker';

import '../css/Form.css';


/** Modal showed when the employee is created
 * @param {function} handleSubmit- put the new employee in the state
 */
function Form({handleSubmit}) {
  
    //check if a element is open to avoir 2 opened elements like dropdown or calendar
    const initialState = {
        dateOfBirth: false,
        startDate: false,
        state: false,
        department: false,
      };
    const [openedElts, setOpenElts] = useState(initialState);

    //state used to display the modal when the employee is "created"
    const [created, setCreated]= useState(false)
    
    //the data required for a new employee
    const initialDataState= {
        firstName:'',
        lastName:'',
        startDate: new Date().toLocaleDateString(),
        department:Departments[0].value,
        dateOfBirth:'dd/mm/yyyy',
        street:'',
        city:'',
        state:StatesData[0].value,
        zipCode:''
    }
    const [data,setData]= useState(initialDataState)

    //validate the form, put the employee in the state, open the modal and reset the inputs
    const handleSubmitForm = async e => {
        e.preventDefault();
        handleSubmit(data)
        setCreated(true)
        setData(initialDataState)  
    }

    //change the data and the input displayed
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            })
      };
    
    //change the data and the input displayed for the calendar and dropdown, because the list of value is not the targeted element 
    const handleCustomInputChange = (name, value) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    //if one element is open, it close all of them. If none are open, the clicked element opens
    const handleElementsOpening = (elt) => { 
        if(openedElts.startDate ||openedElts.dateOfBirth || openedElts.department || openedElts.state) {
            setOpenElts(initialState)  
        }  else {
            setOpenElts({
                ...openedElts,
                [elt]: !openedElts[elt],
            }); 
        }
    };
    
   //if one input is changed, the dropdowns/calendar close
    useEffect(() => {
        setOpenElts(initialState) 
    }, [data])

    return (
        <React.Fragment >
            
            <form onSubmit={handleSubmitForm} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input required pattern="[A-za-z].{1,}" title="2 characters minimum" type="text" id="first-name" name='firstName'   value={data.firstName} onChange={handleInputChange}/>

                <label htmlFor="last-name">Last Name</label>
                <input required type="text" id="last-name" name='lastName' pattern="[A-Za-z].{1,}" title="2 characters minimum" value={data.lastName} onChange={handleInputChange} />

                <Picker 
                text="Date of Birth"
                date={data.dateOfBirth} 
                handleInputChange={handleInputChange}
                handleCustomInputChange={handleCustomInputChange}
                label="date-of-birth"
                name='dateOfBirth'
                isOpen={openedElts.dateOfBirth}
                handleOpen={handleElementsOpening}
                />

                <Picker 
                text="Start Date"
                date={data.startDate} 
                handleInputChange={handleInputChange}
                handleCustomInputChange={handleCustomInputChange}
                label="start-date"
                name='startDate'
                isOpen={openedElts.startDate}
                handleOpen={handleElementsOpening}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input required  id="street" type="text" name='street'  title="This field is required" value={data.street} onChange={handleInputChange}/>

                    <label htmlFor="city">City</label>
                    <input required   id="city" type="text"  name='city' pattern="[A-za-z].{1,}" title="2 characters minimum" value={data.city} onChange={handleInputChange}/>
                    
                    <Dropdown
                    selectValue={StatesData[0]}
                    handleSelectChange={handleCustomInputChange}
                    selectLabel="State"
                    selectList={StatesData}
                    selectName="state"
                    isOpen={openedElts.state}
                    handleOpen={handleElementsOpening} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input required id="zip-code" type="text" name='zipCode'pattern="[0-9].{1,}" title="Must be a number" value={data.zipCode} onChange={handleInputChange} />
                </fieldset>
                
                    <Dropdown
                    selectValue={Departments[0]}
                    handleSelectChange={handleCustomInputChange}
                    selectLabel="Department"
                    selectList={Departments}
                    selectName="department"
                    isOpen={openedElts.department}
                    handleOpen={handleElementsOpening}
                     />
                <button className="save-button">Save</button>
            </form>
            {created=== true ? <ConfirmationMessage setCreated={setCreated}/>:''}
        </React.Fragment>
    )
}

export default Form