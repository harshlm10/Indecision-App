import React from 'react'

import AddOption from './AddOptions'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteAllOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handlePickOneOption = () => {
        const option = Math.floor(Math.random() * this.state.options.length)
        //alert(this.state.options[option])
        this.setState(() => ({ selectedOption: this.state.options[option] }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return `Enter a Valid Option!`
        }
        else if (this.state.options.indexOf(option) > -1) {
            return `Option already Exists`
        }
        this.setState((prevstate) => ({ options: [...prevstate.options, option] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevstate) => ({
            options: prevstate.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            options && this.setState(() => ({ options }))
        }
        catch (e) {
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options)
            localStorage.setItem('options', options)
        }
    }
    componentWillUnmount() {
        console.log('unmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePickOneOption={this.handlePickOneOption}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteAllOptions={this.handleDeleteAllOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal} />
            </div>
        )
    }
}