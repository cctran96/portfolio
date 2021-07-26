import React, { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../helpers/projects"
import { blogs } from "../helpers/blogs"
import Card from "../components/Card"

const Works = () => {
    const [view, setView] = useState("All")

    const handleClick = e => {
        setView(e.target.innerText)
    }

    const all = [...projects, ...blogs].sort((a,b) => a.priority > b.priority ? -1 : 1)

    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div className="works" variants={headerVar}>
                <h1 title="Things I've Worked On">Things I've Worked On</h1>
                <div className="options-container">
                    <div onClick={handleClick} className={`option1 ${view === "All" ? "selected" : null}`}>All</div>
                    <div onClick={handleClick} className={`option2 ${view === "Projects" ? "selected" : null}`}>Projects</div>
                    <div onClick={handleClick} className={`option3 ${view === "Blogs" ? "selected" : null}`}>Blogs</div>
                </div>
                <div className="card-container">
                    {
                        view === "All" ?
                        all.map((work, idx) => <Card key={idx} work={work}/>) :
                        (
                            view === "Projects" ?
                            projects.map((work, idx) => <Card key={idx} work={work}/>) :
                            (
                                view === "Blogs" ?
                                blogs.map((work, idx) => <Card key={idx} work={work}/>) : null
                            )
                        )
                    }
                </div>
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