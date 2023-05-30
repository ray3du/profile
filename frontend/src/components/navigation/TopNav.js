import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./TopNav.css"

const TopNav = ({topnavRef}) => {
    return (
        <div id="topnav" ref={topnavRef}>
            <div className="row py-4">
                <div className="col-lg-4" id="left-title">
                    <div className="d-flex flex-row justify-content-evenly">
                        <Link to={""} >Home</Link>
                        <Link to={""} >About</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="text-center" id="title-view">
                        <Link to={""} id="title" >RAY3DU</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" id="icons">
                    <div className="text-end" id="bars-view">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

                <div className="col-lg-4" id="right-title">
                    <div className="d-flex flex-row justify-content-evenly">
                        <Link to={""} >Projects</Link>
                        <Link to={""} >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
