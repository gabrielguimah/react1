import React from 'react'
import If from '../data/if'

export default props => {

    return (
        <div>
            <h1>Fifth Component</h1>
            <h2>Conditional with If - Example React</h2>

            <If test={props.number > 10}>
                <span>The number {props.number} is bigger than 10.</span>
            </If>
            <If test={props.number < 10}>
                <span>The number {props.number} is smaller than 10.</span>
            </If>
        </div>
    )
}