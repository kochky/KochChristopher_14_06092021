
import { Link } from 'react-router-dom'
import  { useState} from 'react'

import Form from '../componants/Form';


function CreateEmployeePage (){


    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form />
            </div>
         </div>
      );
}

export default CreateEmployeePage