import React from "react"

const Demo = ({demo}) => {
    return (
        <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${demo}`}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    )
}

export default Demo