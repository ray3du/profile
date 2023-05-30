import React from "react"
import { Link } from "react-router-dom"
import './About.css'

const About = () => {
    return (
        <div id="about">
            <div className="row container">
                <div className="col-12 text-center">
                    <p id="about_title">ABOUT ME</p>
                    <p id="about_description">
                    I am a software developer from Nairobi, Kenya, dedicated to creating innovative software solutions. Driven by a profound passion for design and development, I find immense fulfillment in crafting software products that transcend platforms. I thrive on the opportunity to tackle complex challenges and deliver intuitive solutions that enhance user experiences.
                    </p>
                </div>
                <div className="col-12 mb-4">
                    <div id="about_button" className="text-center my-1">
                        <Link to={""}>MORE ABOUT ME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
