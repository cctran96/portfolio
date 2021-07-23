import React, { useEffect, useState} from "react"
import Logo from "./images/Logo"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Contact from "./components/Contact"

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

const App = () => {
    const [tab, setTab] = useState("home")
    const [width, setWidth] = useState(getWidth())
    const [height, setHeight] = useState(getHeight())
    const [isLoading, setLoading] = useState(true)
    const fakeRequest = () => new Promise(resolve => setTimeout(() => resolve(), 3500))

    useEffect(() => {
        fakeRequest().then(() => setLoading(false))
    }, [])

    return (
        isLoading ? <Logo /> :
        <>
            <Navbar width={width} setWidth={setWidth} setHeight={setHeight} setTab={setTab} tab={tab}/>
            <div className="website">
                {
                    tab === "home" ? 
                    <Home width={width} height={height}/> :
                    (
                        tab === "contact" ?
                        <Contact/> : null
                    )
                }
            </div>
        </>
    )
}

export default App