import React from 'react'

export default props => {

    return (
        <div>
            <h1>Fifth Component</h1>
            <h2>Conditional Component - Example React</h2>
            <h3>The number is {props.number}</h3>
            {props.number % 2 == 0 ?
                <span>So, it's an ODD number</span>
                : <span>So, it's an EVEN number</span>
            }
        </div>
    )
}