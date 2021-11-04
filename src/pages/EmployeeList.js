import React from 'react'
import Header from '../componants/Header';
import DataTables from 'hrnet-datatables'
import dataUser from '../dataUser';
import propsExample from '../propsExample'
import '../css/DataTable.css';



function EmployeeList() {

    return (
        <React.Fragment>
            <Header />
            <div className="employee-list-container">
                <DataTables label={propsExample} data={dataUser} />
            </div>
        </React.Fragment>  
    )
}

export default EmployeeList