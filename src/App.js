
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CreateEmployeePage from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

  

function App() {
  return (
    <Router>
    <Switch>
       <Route exact path='/'>
         <CreateEmployeePage />
       </Route>
       <Route path='/employee-list'>
         <EmployeeList />
       </Route>
    </Switch>


    </Router>
  

  )
 
}

export default App;
