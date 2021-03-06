
import './css/App.css';
import { useState } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CreateEmployeePage from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

function App() {

  const [employees,setEmployees]=useState([])

  //Will add the employee to an array, to avoid erase the  previous ones
  const createEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
    <Switch>
       <Route exact path='/'>
         <CreateEmployeePage handleSubmit={createEmployee} />
       </Route>
       <Route  path='/employee-list'>
         <EmployeeList setEmployees={setEmployees}employees={employees} />
       </Route>
    </Switch>
    </Router>
  )
}

export default App;
