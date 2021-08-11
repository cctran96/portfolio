import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaMediumM, FaReact } from "react-icons/fa"
import { DiRuby, DiSqllite } from "react-icons/di"
import { SiRedux, SiRails, SiJavascript, SiPostgresql, SiFramer, SiBootstrap } from "react-icons/si"
import { VscJson, VscChromeClose } from "react-icons/vsc"
import { AiTwotoneApi } from "react-icons/ai"
import Demo from "./Demo"

const Card = ({work}) => {
    const [hover, setHover] = useState(false)
    const [viewDemo, setViewDemo] = useState(false)

    const handleDemo = () => {
        setViewDemo(!viewDemo)
    }

    const renderIcon = (name, idx) => {
        switch(name) {
            case "react":
                return <FaReact key={idx} color="#61DBFB"/>
            case "javascript":
                return <SiJavascript key={idx} color="#F0DB4F"/>
            case "ruby":
                return <DiRuby key={idx} color="#E31864"/>
            case "rails":
                return <SiRails key={idx} color="#CC0000"/>
            case "sqlite":
                return <DiSqllite key={idx} color="#013D57"/>
            case "redux":
                return <SiRedux key={idx} color="#764ABC"/>
            case "postgre":
                return <SiPostgresql key={idx} color="#0064A5"/>
            case "framer":
                return <SiFramer key={idx} color="#6CD5FD"/>
            case "bootstrap":
                return <SiBootstrap key={idx} color="#673BB6"/>
            case "json":
                return <VscJson key={idx} color="gold"/>
            case "api":
                return <AiTwotoneApi key={idx} color="skyblue"/>
            default:
                return
        }
    }

    return (
        <>
            <motion.div
            className="card"
            initial="start"
            animate="end"
            variants={cardVar}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                background: work.type === "blog" ? "whitesmoke" : work.color,
                color: work.type === "blog" ? "black" : "whitesmoke"
            }}
            >
                {   
                    !hover ?
                    <>
                        <h2>{work.name}</h2>
                        <p>{work.description}</p>
                        <div className="card-icons">
                            {
                                work.icons ?
                                work.icons.map((name, idx) => renderIcon(name, idx)) :
                                <FaMediumM/>
                            }
                        </div>
                    </> :
                    null
                }
                {
                    hover ?
                    <motion.div className="card-overlay" initial="start" animate="end" variants={overlayVar}>
                        {
                            work.type === "project" ?
                            <>
                                {
                                    work.source ?
                                    <a href={work.source} target="_blank" rel="noopener noreferrer">Source</a> :
                                    <>
                                        <a href={work.frontend} target="_blank" rel="noopener noreferrer">Frontend</a>
                                        <a href={work.backend} target="_blank" rel="noopener noreferrer">Backend</a>
                                    </>
                                }
                                {
                                    work.demo ?
                                    <p onClick={handleDemo}>Demo</p> : null
                                }
                            </> :
                            <>
                                <a href={work.link} target="_blank" rel="noopener noreferrer">Source</a>
                            </>
                        }
                    </motion.div> : null
                }
            </motion.div>
            {   viewDemo ? 
                <div className="demo-overlay">
                    <motion.div className="demo-container" variants={demoVar}>
                        <VscChromeClose size={40} onClick={handleDemo}/>
                        {console.log(work.demo)}
                        {
                            work.demo ?
                            <Demo demo={work.demo}/>
                            : null
                        }
                    </motion.div>
                </div> : null
            }
        </>
    )
}

export default Card

const cardVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const overlayVar = {
    start: {scale: 0.1, opacity: 0, rotate: 360},
    end: {scale: 1, opacity: 1, rotate: 0, transition: {duration: 0.5}}
}

const demoVar = {
    start: {opacity: 0, y: -100},
    end: {opacity: 1, y: 0, transition: {duration: 0.5}}
}