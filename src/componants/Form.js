import React, { useState,useEffect} from 'react'
import { StatesData } from "../data/StatesData";
import ConfirmationMessage from "./ConfirmationMessage";
import Dropdown from './Dropdown';
import {Departments} from '../data/Departement';
import Picker from './Picker';


import '../css/Form.css';


function Form() {
  
    const initialState = {
        birth: false,
        start: false,
        state: false,
        department: false,
      };
    const [openedElts, setOpenElts] = useState(initialState);
    
    const [created, setCreated]= useState(false)
    const initialDataState= {
        firstName:'',
        lastName:'',
        birth:'dd/mm/yyyy',
        start: new Date().toLocaleDateString(),
        department:Departments[0],
        street:'',
        city:'',
        state:StatesData[0],
        zipCode:''
    }
    const [data,setData]= useState(initialDataState)
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(data);
    const handleSubmit = async e => {
        e.preventDefault();
        localStorage.setItem('employees', JSON.stringify(employees));
        setCreated(true)
        setData(initialDataState)  
    }

    const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleElementsOpening = (elt) => {  
        if(openedElts.start ||openedElts.birth || openedElts.department || openedElts.state) {
            setOpenElts(initialState)  
        }  else {
            setOpenElts({
                ...openedElts,
                [elt]: !openedElts[elt],
            
            }); 
        }
    };
    
    const handleCustomInputChange = (name, value) => {
        setData({
            ...data,
            [name]: value,
        });
    };

    useEffect(() => {
        setOpenElts(initialState) 
    }, [data])

    return (
        <React.Fragment >
            
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input required pattern="[a-z].{1,}" title="2 characters minimum" type="text" id="first-name" name='firstName'   value={data.firstName} onChange={handleInputChange}/>

                <label htmlFor="last-name">Last Name</label>
                <input required type="text" id="last-name" name='lastName' pattern="[a-z].{1,}" title="2 characters minimum" value={data.lastName} onChange={handleInputChange} />

                <Picker 
                text="Date of Birth"
                date={data.birth} 
                handleInputChange={handleInputChange}
                handleCustomInputChange={handleCustomInputChange}
                label="date-of-birth"
                name='birth'
                isOpen={openedElts.birth}
                handleOpen={handleElementsOpening}
                />

                <Picker 
                text="Start Date"
                date={data.start} 
                handleInputChange={handleInputChange}
                handleCustomInputChange={handleCustomInputChange}
                label="start-date"
                name='start'
                isOpen={openedElts.start}
                handleOpen={handleElementsOpening}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input required  id="street" type="text" name='street' pattern="[a-z].{1,}" title="2 characters minimum" value={data.street} onChange={handleInputChange}/>

                    <label htmlFor="city">City</label>
                    <input required   id="city" type="text"  name='city' pattern="[a-z].{1,}" title="2 characters minimum" value={data.city} onChange={handleInputChange}/>
                    
                    <Dropdown
                    selectValue={data.state}
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
                    selectValue={data.department}
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