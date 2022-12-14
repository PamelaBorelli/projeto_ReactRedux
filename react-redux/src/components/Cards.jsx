import './Card.css'
import React from 'react'

function getColor(props){
    if (props.red) return"Red"
    if (props.green) return"Green"
    if (props.blue) return"Blue"
    if (props.purple) return"Purple"
    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='header'>
                <span className='title'>{props.title}</span>
            </div>

            <div className='content'>
            {props.children}
            </div>
        </div>
    )
}
