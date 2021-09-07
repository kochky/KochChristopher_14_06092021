
import { Link } from 'react-router-dom'
import  { useState} from 'react'

import Header from '../componants/Header';
import Form from '../componants/Form';


function CreateEmployeePage (){


    return (
        <div>
            <Header />
            <div className="container">
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form />
            </div>
         </div>
      );
}

export default CreateEmployeePage