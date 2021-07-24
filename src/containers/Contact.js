import React from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import GlitchClip from "react-glitch-effect/core/GlitchClip"

const Contact = () => {
    return (
        <motion.div className="content-container" initial="start" animate="end" variants={containerVar}>
            <motion.div variants={headerVar} className="contact">
                <div className="header">
                    <h1 title="Connect With Me">Connect With Me</h1>
                    <div className="contact-icons">
                        <GlitchClip duration={5}>
                            <a href="https://github.com/cctran96" target="_blank" rel="noopener noreferrer"><FaGithub color="#6e5494"/></a>
                        </GlitchClip>
                        <GlitchClip duration={10}>
                            <a href="https://www.linkedin.com/in/chauctran" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0e76a8"/></a>
                        </GlitchClip>
                        <GlitchClip duration={9}>
                            <a href="https://cctran96.medium.com" target="_blank" rel="noopener noreferrer"><FaMedium color="white"/></a>
                        </GlitchClip>
                        <GlitchClip duration={1}>
                            <a href="mailto:cctran96@gmail.com"><GrMail color="#BB001B"/></a>
                        </GlitchClip>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="skills">

                    </div>
                    <div className="message">

                    </div>
                </div>
            </motion.div>
            {/* <p>
                I'm currently looking for a full time position as a full stack or web developer.
                Please reach out to me regarding any open opportunities or if you have any questions.
            </p>
            <a href="mailto:cctran96@gmail.com">Contact Me</a> */}
        </motion.div>
    )
}

export default Contact

const containerVar = {
    start: {y: 200, opacity: 0},
    end: {y: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0}}
}

const headerVar = {
    start: {opacity: 0},
    end: {opacity: 1, transition: {duration: 0.3, delay: 0.5}}
}