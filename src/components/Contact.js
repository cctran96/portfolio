import React, {forwardRef} from 'react'

const Contact = (props, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1>Connect With Me</h1>
            <p>
                I'm currently looking for a full time position as a full stack or web developer.
                Please reach out to me regarding any open opportunities or if you have any questions.
            </p>
            <a href="mailto:cctran96@gmail.com">Contact Me</a>
        </div>
    )
}

export default forwardRef(Contact)