import React from 'react'
import { motion } from 'framer-motion'
import Icons from '../components/Icons'
import Ghost from '../sprites/Ghost'

const Home = ({width, height}) => {
    return (
        <motion.div className="banner" initial="start" animate="end">
            <motion.h1 variants={h1Var} title="Hi, I'm">Hi, I'm</motion.h1>
            <motion.h2 variants={h2Var} title="Chau Tran">Chau Tran</motion.h2>
            <motion.h3 variants={h3Var} title="and I'm a Full Stack Developer">and I'm a Full Stack Developer.</motion.h3>
            <Icons/>
            <Ghost speed={1} start={{left: width, top: 0}} dir="left" screenWidth={width} screenHeight={height}/>
            <Ghost speed={0.75} start={{top: 0}} dir="right" screenWidth={width} screenHeight={height}/>
            <Ghost speed={0.8} start={{left: width, top: height/2}} dir="left" screenWidth={width} screenHeight={height}/>
            <Ghost speed={0.9} start={{top: height/2}} dir="right" screenWidth={width} screenHeight={height}/>
            <Ghost speed={1.25} start={{top: height/3}} dir="right" screenWidth={width} screenHeight={height}/>
        </motion.div>
    )
}

export default Home

const h1Var = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {duration: 1, delay: 1.5}
    }
}

const h2Var = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {duration: 1, delay: 2}
    }
}

const h3Var = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {duration: 1, delay: 2.5}
    }
}