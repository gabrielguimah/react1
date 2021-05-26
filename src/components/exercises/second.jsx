import React from 'react'

export default props => {
    return (
        <div>
            <h1>Second Component</h1>
            <h2>Component with Parameters - Example React</h2>
            <h3>{props.title}</h3>
            <h3>{props.subtitle}</h3>
        </div>
    )
}