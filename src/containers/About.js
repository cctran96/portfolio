import React from "react"
import Portrait from "../images/Portrait.jpeg"
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
import { DiRuby, DiSqllite, DiDatabase } from "react-icons/di"
import { SiRedux, SiRails, SiJavascript, SiPostgresql, SiFramer, SiBootstrap, SiPostman, SiGithub, SiHtml5, SiCss3 } from "react-icons/si"
import { VscJson } from "react-icons/vsc"
import { AiTwotoneApi } from "react-icons/ai"

const About = () => {
    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div className="about" variants={headerVar}>
                <h1 title="Get to Know Me">Get to Know Me</h1>
                <div className="bio-container">
                    <div className="skills-container">
                        <h2>I've Worked With...</h2>
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
                            <SiPostman color="#EF5B25"/>
                            <SiGithub color="white"/>
                            <VscJson color="gold"/>
                            <AiTwotoneApi color="skyblue"/>
                        </div>
                    </div>
                    <div className="bio">
                        <img src={Portrait} alt="profile"/>
                        <p>
                            Hi, my name is Chau, and I'm a pharmacy student turned coder. Although this wasn't my first
                            career choice, coding has always fascinated me, and I have grown to love it. I strive to develop
                            comprehensive applications that have a positive impact. This can be in the form of creating 
                            simple games for entertainment, beneficial applications that help improve a user's health,
                            or websites that enhance a user's experience by offering a wide range of functionality. Join me
                            as I continue my journey and better myself each and every day.
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