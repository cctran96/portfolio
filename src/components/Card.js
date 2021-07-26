import React from "react"

const Card = ({work}) => {
    return (
        <div className="card">
            <h2>{work.name}</h2>
            {
                work.type === "project" ?
                <>
                    
                </> :
                <>
                    
                </>
            }
        </div>
    )
}

export default Card