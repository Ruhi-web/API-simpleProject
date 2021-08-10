import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import InputForm from './InputForm'
import MathQuote from './MathQuote';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onSearchForm = this
      .onSearchForm
      .bind(this)
  }
  async onSearchForm(event) {
    const response = await axios.get(`https://numbersapi.com/${event}`);
    this.setState({text: response.data});

  }
  render() {

    return (
      <div className="App">
        <div className="row text-center display-flex flex-column justify-content-center align-items-center outer-wrap">
          <div className="col-md-6 mt-4">
            <h3>
              Type any number and get interesting information about that number
            </h3>
          </div>
          <InputForm onSearchForm={this.onSearchForm}/>
          <MathQuote text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default App;
