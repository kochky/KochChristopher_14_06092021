import { Link } from 'react-router-dom'

import '../css/Header.css';

function Header(){

    return(
    <header className="title">
        <h1>HRnet</h1>
        <div className="link"><Link to='/employee-list'>View Current Employees</Link></div>
        

    </header>
    )
}
export default Header