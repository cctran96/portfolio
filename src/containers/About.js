import React from "react"
import Portrait from "../images/Portrait.jpeg"
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
import { DiRuby, DiSqllite, DiDatabase } from "react-icons/di"
import { SiRedux, SiRails, SiJavascript, SiPostgresql, SiFramer, SiBootstrap, SiPostman, SiGithub, SiHtml5, SiCss3 } from "react-icons/si"

const About = () => {
    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div className="about" variants={headerVar}>
                <h1 title="Get to Know Me">Get to Know Me</h1>
                <div className="bio-container">
                    <div className="skills-container">
                        <h2>Things I've Worked With</h2>
                        <div className="skills">
                            <SiJavascript color="#F0DB4F"/>
                            <FaReact color="#61DBFB"/>
                            <SiRedux color="#764ABC"/>
                            <SiHtml5 color="#E34C26"/>
                            <SiCss3 color="#264DE4"/>
                            <DiRuby color="#E31864"/>
                            <SiRails color="#CC0000"/>
                            <DiDatabase color="silver"/>
                            <DiSqllite color="#013D57"/>
                            <SiPostgresql color="#0064A5"/>
                            <SiFramer color="#6CD5FD"/>
                            <SiBootstrap color="#673BB6"/>
                            <SiPostman color="EF5B25"/>
                            <SiGithub color="white"/>
                        </div>
                    </div>
                    <div className="bio">
                        <img src={Portrait} alt="profile"/>
                        <p>
                            Hi, my name is Chau, and I have a love for developing comprehensive applications that maxmimize user experience. 
                            My journey started in December of 2020 where I began to delve into the world of coding. 
                            I first learned the basics of Python, solving algorithms on my free time. 
                            I transitioned to Javascript and Ruby as I wanted learn the ins and outs of both frontend and backend development.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About

const containerVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const headerVar = {
    start: {opacity: 0},
    end: {opacity: 1, transition: {duration: 0.3, delay: 0.5}}
}