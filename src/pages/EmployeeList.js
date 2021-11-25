import React, { useState } from 'react'
import Header from '../componants/Header';
import DataTables from 'hrnet-datatables'
import dataUser from '../data/dataUser';
import labelNames from '../data/labelNames'
import '../css/DataTable.css';



function EmployeeList({employees,setEmployees}) {
    
    //this is used for the demonstration of how works the DataTable
    const [value,setValue]=useState(0)
    function handleClick(){
        setEmployees(dataUser)
        setValue(value=>value +1)
    }

    return (
        <React.Fragment>
            <Header />
            <div className="employee-list-container">
                <DataTables key={value}label={labelNames} data={employees} />
                <button onClick={handleClick} className="fake-button">Fake Data for demonstration</button>
            </div>  
        </React.Fragment>  
    )
}

export default EmployeeList