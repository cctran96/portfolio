import React from "react"
import { motion } from "framer-motion"
import GlitchClip from "react-glitch-effect/core/GlitchClip"
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi"
import { RiMediumLine } from "react-icons/ri"

const Icons = () => {
    return (
        <motion.div className="icon-container" initial="start" animate="end">
            {/* <GlitchClip>
                <motion.a href="https://github.com/cctran96" target="_blank" variants={iconVar(0)}><FiGithub color="#6e5494"/></motion.a>
            </GlitchClip>
            <GlitchClip >
                <motion.a href="https://www.linkedin.com/in/chauctran" target="_blank" variants={iconVar(1)}><FiLinkedin color="#0e76a8"/></motion.a>
            </GlitchClip>
            <GlitchClip >
                <motion.a href="https://cctran96.medium.com" target="_blank" variants={iconVar(2)}><RiMediumLine color="white"/></motion.a>
            </GlitchClip>
            <GlitchClip >
                <motion.a href="mailto:cctran96@gmail.com" variants={iconVar(3)}><FiMail color="#BB001B"/></motion.a>
            </GlitchClip>
            <GlitchClip >
                <motion.a variants={iconVar(4)}><CgNotes color="gold"/></motion.a>
            </GlitchClip> */}
            <GlitchClip>
                <motion.a href="https://github.com/cctran96" target="_blank" rel="noopener noreferrer" variants={iconVar(0)}><FiGithub color="#6e5494"/></motion.a>
                <motion.a href="https://www.linkedin.com/in/chauctran" target="_blank" rel="noopener noreferrer" variants={iconVar(1)}><FiLinkedin color="#0e76a8"/></motion.a>
                <motion.a href="https://cctran96.medium.com" target="_blank" rel="noopener noreferrer" variants={iconVar(2)}><RiMediumLine color="white"/></motion.a>
                <motion.a href="mailto:cctran96@gmail.com" variants={iconVar(3)}><FiMail color="#BB001B"/></motion.a>
            </GlitchClip>
        </motion.div>
    )
}

export default Icons

const iconVar = position => (
    {
        start: {opacity: 0},
        end: {opacity: 1, transition: {delay: 2.7 + 0.2 * position, duration: 1}}
    }
)