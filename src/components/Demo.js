import React from "react"

const Demo = ({demo}) => {
    return (
        <iframe 
        width="95%"
        height="315" 
        src={`https://www.youtube.com/embed/${demo}`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
    )
}

export default Demo