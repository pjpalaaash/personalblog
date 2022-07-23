

import React from 'react'
import '../App.css'
export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
                {/* <!-- <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li> --> */}
                <li className="nav-item"><a className="nav-link" href="#section-resume">Resume</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-footer">Connect</a></li>
                </ul>
            </div>
            </div>
            </nav>
    </div>
  )
}
