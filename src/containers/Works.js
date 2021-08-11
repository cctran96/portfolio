import React, { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../helpers/projects"
import { blogs } from "../helpers/blogs"
import Card from "../components/Card"

const Works = () => {
    const [view, setView] = useState("Projects")

    const handleClick = e => {
        if (e.target.innerText !== view) {
            setView(null)
            setImmediate(() => setView(e.target.innerText))
        }
    }

    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div className="works" variants={headerVar}>
                <h1 title="I've Worked On...">I've Worked On...</h1>
                <div className="options-container">
                    <div onClick={handleClick} className={`option1 ${view === "Projects" ? "selected" : null}`}>Projects</div>
                    <div onClick={handleClick} className={`option2 ${view === "Blogs" ? "selected" : null}`}>Blogs</div>
                </div>
                {   view ?
                    <div className="card-container">
                        {
                            view === "Projects" ?
                            projects.map((work, idx) => <Card key={idx} work={work}/>) :
                            (
                                view === "Blogs" ?
                                blogs.map((work, idx) => <Card key={idx} work={work}/>) : null
                            )
                        }
                    </div> : null
                }
            </motion.div>
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