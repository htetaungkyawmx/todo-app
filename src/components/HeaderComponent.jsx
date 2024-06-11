import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-success text-white'>
            <div className="container">
                <a href="#" className='navbar-brand'>Todos</a>
                 <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/todos" className='nav-link'>Todos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/add-todo" className='nav-link'>New Todo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/register" className='nav-link'>Register</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/login" className='nav-link'>Login</Link>
                    </li>
                 </ul>
            </div>
        </nav>
    </div>
  )
}
