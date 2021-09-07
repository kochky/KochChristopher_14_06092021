
import { Link } from 'react-router-dom'
import  { useState} from 'react'

import Form from '../componants/Form';


function CreateEmployeePage (){

    const initialState = {
        birth: false,
        start: false,
        state: false,
        department: false,
      };
    const [openedElts, setOpenElts] = useState(initialState);
    const closeElts= () => {

        if(openedElts.state || openedElts.birth || openedElts.start || openedElts.department){
            setOpenElts(initialState)
        }
    }
    
    return (
        <div onClick={closeElts}>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form setOpenElts={setOpenElts} openedElts={openedElts}/>
            </div>
         </div>
      );
}

export default CreateEmployeePage