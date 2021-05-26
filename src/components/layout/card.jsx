import React from 'react'
import './card.css'

export default props => {
    return (
        <div className="Card">
            <div className="Content">
                {props.children}
            </div>
            <div className="Footer">
                {props.footerTitle}
            </div>
        </div>
    )
}