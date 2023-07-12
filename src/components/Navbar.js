import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <li className="navbar-brand">EA-20 Project</li>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li  className="nav-item active">
        <Link to='/' className="nav-link"  >Task-2A <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to='/task2b' className="nav-link"  >Task-2B</Link>
      </li>
      <li className="nav-item">
        <Link to='/task3' className="nav-link"  >Task-3</Link>
      </li>
      <li className="nav-item">
        <Link to='/task4' className="nav-link"  >Task-4</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar