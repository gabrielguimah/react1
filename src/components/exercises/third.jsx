import React from 'react'

export default props => {
    return (
        <div>
            <h1>Third Component</h1>
            <h2>Children in Component - Example React</h2>
            <h3>Children:</h3>
            <div>
                {props.children}
            </div>
        </div>
    )
}