import { Link } from 'react-router-dom'

import '../css/Header.css';

function Header(){
    return(
        <header >
            <h1>HRnet</h1>
            <div>
                <div className="link"><Link to='/'>Create Employees</Link></div>
                <div className="link"><Link to='/employee-list'>View Current Employees</Link></div>
            </div>
        </header>
    )
}
export default Header