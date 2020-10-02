import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                onClick={props.handleDeleteAllOptions}
                className="button button--link"
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p
            className='widget__message'
        >
            Please Add an option to get Started
            </p>}
        {
            props.options.map((elem, index) => (
                <Option
                    key={index}
                    itemNumber={index + 1}
                    text={elem}
                    handleDeleteOption={props.handleDeleteOption}
                />))
        }
    </div>
)
export default Options