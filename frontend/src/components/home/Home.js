import React, { Fragment, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import About from "../about/About"
import TopNav from "../navigation/TopNav"
import Projects from "../projects/Projects"
import './Home.css'

const Home = () => {
    const topnavRef = useRef(null)

    useEffect(() => {
        const context = topnavRef.current
        const handleScroll = () => {
            let scrolled = window.scrollY > 0;
            if (scrolled) {
                context.classList.add('scrolled');
            } else {
                context.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', () => handleScroll())
        return () => window.removeEventListener(handleScroll)
    }, [])

    return (
        <Fragment>
            <div id="home">
                <TopNav topnavRef={topnavRef} />
                <div id="inner-home">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 id="description">Hello, i'm Edwin (ray3du). An experienced Full Stack Software Engineer.</h1>
                        </div>
                        <div className="col-lg-6 col-md-12">

                        </div>
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <div className="d-flex justify-content-center">
                                    <div id="work_view">
                                        <div id="outer_circle" className="d-flex align-items-center justify-content-center">
                                            <div id="inner_circle" className="d-flex align-items-center justify-content-center">
                                                <Link className="mt-1" to={""}>My Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about-page">
                <div className="container">
                    <About />
                </div>
            </div>
            <div className="container-fluid" id="projects">
                <Projects />
            </div>
        </Fragment>
    )
}

{/* <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 id="description">Hello, i'm Edwin (ray3du). An experienced Full Stack Software Engineer.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <div className="d-flex justify-content-center">
                                <div id="work_view">
                                    <div id="outer_circle" className="d-flex align-items-center justify-content-center">
                                        <div id="inner_circle" className="d-flex align-items-center justify-content-center">
                                            <Link className="mt-1" to={""}>My Work</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

export default Home
