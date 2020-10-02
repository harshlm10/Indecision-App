import React from 'react'

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{`${props.itemNumber}. ${props.text}`}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>Delete</button>
    </div>
)
export default Option
