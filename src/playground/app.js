// console.log('App.js is running')

// const app = {
//     title: 'Indecision App',
//     subtitle: 'put your life in the hands of a Computer',
//     options: []
// }

// const onFormSubmit = (e) => {
//     e.preventDefault()
//     const option = e.target.elements.option.value
//     option ? app.options.push(option) : null
//     e.target.elements.option.value = ''
//     myrender()
// }

// const approute = document.getElementById('app')


// const myrender = () => {
//     const resetList = (e) => {
//         e.preventDefault()
//         app.options.splice(0, app.options.length)
//         myrender()
//     }

//     const generateOption = (e) => {
//         const randOption = Math.floor(Math.random() * app.options.length)
//         console.log(randOption)
//         myrender()
//     }
//     const mytemplate = (
//         <div>
//             <h1>{app.title}</h1>
//             <p>{app.subtitle}</p>
//             <p>{(app.options.length > 0) ? 'Your Options' : 'No Options'}</p>
//             <ol>
//                 {
//                     app.options.map((element, index) => <li key={index}>{element}</li>)
//                 }
//             </ol>
//             <button name='resetButton' onClick={resetList}>Remove All</button>
//             <button disabled={app.options.length === 0} onClick={generateOption}>What should I do?</button>
//             <form onSubmit={onFormSubmit}>
//                 <input type='text' name='option' placeholder='' />
//                 <button>Add Options</button>
//             </form>
//         </div>
//     )
//     ReactDOM.render(mytemplate, approute)
// }
// myrender()

// let count = 0
// const inc = () => {
//     count++
//     myfun()
// }
// const dec = () => {
//     count--
//     myfun()
// }
// const res = () => {
//     count = 0
//     myfun()
// }
// const myfun = () => {
//     const templatetwo = (
//         <div id='demo'>
//             <h1>Count : {count}</h1>
//             <button id='inc' className='mybutton' onClick={inc}>+1</button>
//             <button id='dec' className='mybutton' onClick={dec}>-1</button>
//             <button id='res' className='mybutton' onClick={res}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templatetwo, approute)
// }
// myfun()
// const approute = document.getElementById('app')
// let visible = false
// const render = () => {
//     const handleToggle = (e) => {
//         visible ? visible = false : visible = true
//         render()
//     }

//     const toggler = (
//         <div>
//             <p>Here are Some Details About You!!</p>
//             <p>Name - Harshit </p>
//             <p>Location - Bangalore</p>
//         </div>
//     )
//     const template = (
//         <div>
//             <h1>
//                 Toggle Visibility
//         </h1>
//             <button onClick={handleToggle}>{visible ? 'Hide Details' : 'Show Details'}</button>
//             {visible && toggler}
//         </div>
//     )
//     ReactDOM.render(template, approute)
// }

// render()

const approute = document.getElementById('app')

// class IndecisionApp extends React.Component {
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options')
//             const options = JSON.parse(json)
//             options && this.setState(() => ({ options }))
//         }
//         catch (e) {
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.options.length !== this.state.options.length) {
//             const options = JSON.stringify(this.state.options)
//             localStorage.setItem('options', options)
//         }
//     }
//     componentWillUnmount() {
//         console.log('unmount')
//     }
//     constructor(props) {
//         super(props)
//         this.state = {
//             options: []
//         }
//         this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this)
//         this.handlePickOneOption = this.handlePickOneOption.bind(this)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.handleDeleteOption = this.handleDeleteOption.bind(this)
//     }
//     handleDeleteAllOptions() {
//         this.setState(() => ({ options: [] }))
//     }

//     handlePickOneOption() {
//         const option = Math.floor(Math.random() * this.state.options.length)
//         alert(this.state.options[option])
//     }

//     handleAddOption(option) {
//         if (!option) {
//             return `Enter a Valid Option!`
//         }
//         else if (this.state.options.indexOf(option) > -1) {
//             return `Option already Exists`
//         }
//         this.setState((prevstate) => ({ options: [...prevstate.options, option] }))
//     }

//     handleDeleteOption(optionToRemove) {
//         this.setState((prevstate) => ({
//             options: prevstate.options.filter((option) => optionToRemove !== option)
//         }))
//     }

//     render() {
//         const subtitle = 'Put your life in the hands of a computer'
//         return (
//             <div>
//                 <Header subtitle={subtitle} />
//                 <Action
//                     hasOptions={this.state.options.length > 0}
//                     handlePickOneOption={this.handlePickOneOption}
//                 />
//                 <Options
//                     options={this.state.options}
//                     handleDeleteAllOptions={this.handleDeleteAllOptions}
//                     handleDeleteOption={this.handleDeleteOption}
//                 />
//                 <AddOption handleAddOption={this.handleAddOption} />
//             </div>
//         )
//     }
// }

// // IndecisionApp.defaultProps = {
// //     options: []
// // }

// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             {props.subtitle && <h2>{props.subtitle}</h2>}
//         </div>
//     )
// }

// Header.defaultProps = {
//     title: 'Indecision'
// }
// const Action = (props) => {
//     return (
//         <div>
//             <button disabled={!props.hasOptions} onClick={props.handlePickOneOption}>What should I do?</button>
//         </div>
//     )
// }

// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleDeleteAllOptions}>Remove All</button>
//             {props.options.length === 0 && <p>Add an option to get Started</p>}
//             {
//                 props.options.map((elem, index) => (
//                     <Option
//                         key={index}
//                         text={elem}
//                         handleDeleteOption={props.handleDeleteOption}
//                     />))
//             }
//         </div>
//     )
// }

// const Option = (props) => {
//     return (
//         <div>
//             <p>{props.text}</p>
//             <button
//                 onClick={(e) => {
//                     props.handleDeleteOption(props.text)
//                 }}>Delete</button>
//         </div>
//     )
// }
// class AddOption extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error: undefined
//         }
//     }
//     handleAddOption(e) {
//         e.preventDefault()
//         const option = e.target.elements[0].value
//         const error = this.props.handleAddOption(option)
//         this.setState(() => ({ error }))
//         !error && (e.target.elements[0].value = '')
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <h4>{this.state.error}</h4>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type='text' name='option' />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, approute)

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
        this.res = this.res.bind(this)
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count')
            if (!isNaN(parseInt(json, 10))) {
                this.setState(() => ({ count: parseInt(json) }))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidUpdate() {
        localStorage.setItem("count", this.state.count)
    }
    inc() {
        this.setState((prevstate) => {
            return {
                count: prevstate.count + 1
            }
        })
    }
    dec() {
        this.setState((prevstate) => {
            return {
                count: prevstate.count - 1
            }
        })
    }
    res() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button id='inc' className='mybutton' onClick={this.inc}>+1</button>
                <button id='dec' className='mybutton' onClick={this.dec}>-1</button>
                <button id='res' className='mybutton' onClick={this.res}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Count />, document.getElementById('app'))


// class VisibilityToggler extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             visible: false
//         }
//         this.toggle = this.toggle.bind(this)
//     }

//     toggle() {
//         this.setState((prevstate) => {
//             return {
//                 visible: !prevstate.visible
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggler</h1>
//                 <button onClick={this.toggle}>{this.state.visible ? 'Hide Details' : 'Show Detals'}</button>
//                 {this.state.visible && <p>Here Are some information</p>}
//             </div>
//         )
//     }
// }
// ReactDOM.render(<VisibilityToggler />, document.getElementById('app'))