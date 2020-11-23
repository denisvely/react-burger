import React from 'react'
import ButtonStyles from './Button.css'

const button = (props) => (
    <button className={`Button ${props.buttonType}`}
        onClick={props.clicked}
    >{props.children}</button>
)

export default button