import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { key } from "../helpers/key"
import GlitchClip from "react-glitch-effect/core/GlitchClip"
import emailjs from "emailjs-com"

const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", subject: "", message: ""})
    const [result, setResult] = useState(null)

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm("gmail", key.TEMPLATE_ID, e.target, key.USER_ID)
        .then(result => {
            setResult({success: "Your message has been sent. I will get back to you as soon as I can!"})
            setForm({name: "", email: "", subject: "", message: ""})
        }, error => {
            setResult({error: "Looks like something went wrong. Please try again later."})
        })
    }

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
                    <div className="statement">
                        <p>
                            I'm currently looking for a full time position as a full stack or web developer.
                            Please reach out to me regarding any open opportunities or if you have any questions.
                        </p>
                    </div>
                    <div className="message">
                        <h2>Say Hello</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input name="name" value={form.name} onChange={handleChange} required/>
                            <label>Email</label>
                            <input name="email" value={form.email} onChange={handleChange} required/>
                            <label>Subject</label>
                            <input name="subject" value={form.subject} onChange={handleChange} required/>
                            <label>Message</label>
                            <textarea name="message" value={form.message} onChange={handleChange} required/>
                            <motion.button type="submit">
                                <p>Send Message</p>
                            </motion.button>
                            <h3 style={{color: result ? (result.success ? "green" : "red") : null}}>
                                {result ? (result.success ? result.success : result.error) : null}
                            </h3>
                        </form>
                    </div>
                </div>
            </motion.div>
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