import React from "react"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <div className="projects">
                <motion.h1 variants={headerVar} title="Things I've Worked On">Things I've Worked On</motion.h1>
            </div>
        </motion.div>
    )
}

export default Projects

const containerVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const headerVar = {
    start: {opacity: 0},
    end: {opacity: 1, transition: {duration: 0.3, delay: 0.5}}
}