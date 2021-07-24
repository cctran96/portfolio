import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { debounce } from "../helpers/debounce"
import { ReactComponent as Logo } from "../images/Logo.svg"
import { GoThreeBars } from "react-icons/go"
import { IoMdClose } from "react-icons/io"

const Navbar = ({width, setWidth, setHeight, tab, setTab}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [collapse, setCollapse] = useState(width < 800)

    const toggleNav = () => setIsOpen(!isOpen)
    
    // Hides navbar when scrolling
    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    // Collapses navbar depending on screen size
    const handleResize = debounce(() => {
        const screenWidth = window.innerWidth
        setCollapse(screenWidth < 800)
        setWidth(screenWidth)
        setHeight(window.innerHeight)
        if (screenWidth > 800) setIsOpen(false)
    }, 15)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [width, collapse, handleResize])

    // Closes nav menu when you click outside of the menu
    const handleCloseMenu = e => {
        if (e.target.className === ("nav-menu")) toggleNav()
    }

    const handleChangeTab = e => {
        setTab(e.target.innerText.toLowerCase())
        setIsOpen(false)
    }

    return (
        <nav className="navbar" style={{top: visible ? '0' : '-80px' }}>
            <a href="/">
                <motion.div className="logo" initial="start" animate="end" variants={logo}>
                    <Logo/>
                </motion.div>
            </a>
            {
                collapse ? 
                <motion.div className="open-button" animate={isOpen ? "open" : "closed"} variants={openVar}>
                    <GoThreeBars onClick={toggleNav} size={30}/>
                </motion.div> :
                <motion.div className="links" initial="start" animate="end" variants={parent}>
                    {
                        ["Home", "About", "Projects", "Contact", "Resume"].map((link, idx) => (
                            <motion.p 
                            key={idx} 
                            onClick={handleChangeTab} 
                            variants={child} 
                            className={tab === link.toLowerCase() ? "active" : null}
                            title={link}
                            whileHover={{scale: 1.2}}
                            >
                                {link}
                            </motion.p>
                        ))
                    }
                </motion.div>
            }
            {
                isOpen ?
                <div onClick={handleCloseMenu} className="nav-menu">
                    <motion.div className="link-container" initial="start" animate="end" variants={menuVar}>
                        <motion.div className="close-button" variants={closeVar}>
                            <IoMdClose onClick={toggleNav} size={35}/>
                        </motion.div>
                        <motion.div className="menu-links">
                            {
                                ["Home", "About", "Projects", "Contact", "Resume"].map((link, idx) => (
                                    <motion.p 
                                    key={idx} 
                                    onClick={handleChangeTab} 
                                    variants={linkVar(idx + 1)} 
                                    className={tab === link.toLowerCase() ? "active" : null}
                                    title={link}
                                    whileHover={{scale: 1.2}}
                                    >
                                        {link}
                                    </motion.p>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
                : null
            }
        </nav>
    )
}

export default Navbar

const menuVar = {
    start: {
        opacity: 0, x: 1000},
    end: {
        opacity: 1, 
        x: 0, 
        transition: {
            type: "spring",
            bounce: 0
        }
    }
}

const openVar = {
    open: {x: 1000, opacity: 0},
    closed: {opacity: 1, x: 0, transition: {duration: 0.7}}
}

const closeVar = {
    start: {opacity: 0, x: 1000},
    end: {opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.25}}
}

const linkVar = position => {
    return {
        start: {opacity: 0, x: 500},
        end: {opacity: 1, x: 0, transition: {duration: 0.5, delay: 0.5 + position * 0.1}}
    }
}

const parent = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
}

const child = {
    start: {opacity: 0, y: -100},
    end: {opacity: 1, y: 0, transition: {type: "spring", bounce: 0}}
}

const logo = {
    start: {
        opacity: 0,
        rotate: -360
    },
    end: {
        opacity: 1,
        rotate: 0,
        transition: {
            delay: 0.8,
            duration: 1
        }
    }
}