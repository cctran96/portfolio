import React from "react"
import { motion } from "framer-motion"
import resume from "../helpers/resume.pdf"
import image from "../images/resume.png"

const Resume = () => {
    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div className="resume" variants={headerVar}>
                <h1 title="My Resume">My Resume</h1>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="resume"/>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Resume

const containerVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const headerVar = {
    start: {opacity: 0},
    end: {opacity: 1, transition: {duration: 0.3, delay: 0.5}}
}