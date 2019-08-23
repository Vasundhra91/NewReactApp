import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import home from '../views/Home'
import viewrecords from '../views/ViewRecords'
import Maaprange from '../views/RangeCircleform'

export default function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link to="/" className="navbar-brand"><b> Maap</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/records'} className="nav-link">Records</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/create'} className="nav-link">Create</NavLink>
            </li>
            {/* <li><div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div></li> */}

          </ul>

        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/create' component={Maaprange} />
        <Route path='/records' component={viewrecords} />
      </Switch>
    </Router>
  )
}
