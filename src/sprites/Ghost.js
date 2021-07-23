import React, { useCallback, useEffect, useState } from "react"
import { debounce } from "../helpers/debounce"
import ghost from "../images/ghost.png"

const Ghost = ({speed, start, screenWidth, screenHeight, dir}) => {
    const [width, setWidth] = useState(400)
    const [frame, setFrame] = useState(0)
    const [position, setPosition] = useState({x: 0, y: 0})
    const [startPos, setStartPos] = useState({top: start.top, left: start.left})

    // 
    const handleImageLoad = e => {
        const newWidth = e.target.clientWidth
        setWidth(newWidth)
        setPosition({...position, x: -newWidth})
        if (!start.left) setStartPos({...startPos, left: -newWidth})
    }

    const handleResize = debounce(() => {
        const img = document.querySelector(".sprite img")
        setWidth(img.clientWidth)
    }, 50)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    const handleSpriteChange = useCallback(() => {
        const newFrame = frame + 1
        setFrame(newFrame > 7 ? 0 : newFrame)
    }, [frame])

    useEffect(() => {
        const interval = setInterval(() => {
            handleSpriteChange()
        }, 100 * speed)
        return () => clearInterval(interval)
    }, [handleSpriteChange, speed])

    const stepSize = 24

    const handleSpriteMove = useCallback(() => {
        let randomY = Math.floor(Math.random() * (125 - 100 + 1))
        randomY = Math.random() < 0.5 ? randomY : -randomY
        const newY = position.y + randomY
        if (dir === "left") {
            let newPos = position.x - stepSize
            newPos = newPos < -screenWidth - width ? 0 : newPos
            setPosition({...position, x: newPos, y: newY})
        } else {
            let newPos = position.x + stepSize
            newPos = newPos > screenWidth + width ? 0 : newPos
            setPosition({...position, x: newPos, y: newY})
        }
    }, [position, dir, screenWidth, width])

    useEffect(() => {
        const interval = setInterval(() => {
            handleSpriteMove()
        }, 100 * speed)
        return () => clearInterval(interval)
    }, [handleSpriteMove, speed])

    return (
        <div className="sprite" style={{width: width/8, top: startPos.top, left: startPos.left, transform: `translate3d(${position.x}px, ${position.y}px, 0)`}}>
            <img 
            src={ghost} 
            alt="ghost" 
            onLoad={handleImageLoad} 
            style={{
                transform: `translateX(-${width/8 * frame}px) ${dir === "left" ? "scaleX(-1)" : null}`
            }}/>
        </div>
    )
}

export default Ghost