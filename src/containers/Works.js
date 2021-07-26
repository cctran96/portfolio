import React, { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../helpers/projects"
import { blogs } from "../helpers/blogs"

const Works = () => {
    const [view, setView] = useState("All")

    const handleClick = e => {
        setView(e.target.innerText)
    }

    const all = [...projects, ...blogs].sort((a,b) => a.priority > b.priority ? -1 : 1)

    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <div className="works">
                <motion.h1 variants={headerVar} title="Things I've Worked On">Things I've Worked On</motion.h1>
                <div className="options-container">
                    <div onClick={handleClick} className={`option1 ${view === "All" ? "selected" : null}`}>All</div>
                    <div onClick={handleClick} className={`option2 ${view === "Projects" ? "selected" : null}`}>Projects</div>
                    <div onClick={handleClick} className={`option3 ${view === "Blogs" ? "selected" : null}`}>Blogs</div>
                </div>
                <div className="works-container">
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Works

const containerVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const headerVar = {
    start: {opacity: 0},
    end: {opacity: 1, transition: {duration: 0.3, delay: 0.5}}
}