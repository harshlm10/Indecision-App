import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements[0].value
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        !error && (e.target.elements[0].value = '')
    }
    render() {
        return (
            <div>
                {this.state.error && <p className='addOptionError'>{this.state.error}</p>}
                <form className="addOption" onSubmit={this.handleAddOption}>
                    <input className="addOption__input" type='text' name='option' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    }
}