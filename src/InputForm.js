import React, {Component} from 'react'

class InputForm extends Component{
    constructor(props){
        super(props)
        this.state ={entry: ''}
    }

    onsubmitform=(event)=>{
        event.preventDefault();
        this.props.onSearchForm(this.state.entry);
    }

    render(){

        return(
            <div className="form col-md-6 mt-4">
            <form onSubmit={this.onsubmitform}>
            <input 
            type='number' 
            placeholder='Type any number'
            onChange={(event)=>{this.setState({entry: event.target.value});console.log(event.target.value);}}
            value={this.state.event}
            ></input>
            <input type='submit'></input>
            </form>
            </div>
        )
    }
}


export default InputForm;