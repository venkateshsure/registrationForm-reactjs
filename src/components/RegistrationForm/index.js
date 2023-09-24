// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstText: '',
    lastText: '',
    isSubmit: false,
  }

  submitAnotherResponse = () => {
    this.setState({isSubmit: false})
  }

  firstNameChange = event => {
    this.setState({firstName: event.target.value})
    if (event.target.value === '') {
      this.setState({firstText: 'Required'})
    } else {
      this.setState({firstText: ''})
    }
  }

  lastNameChange = event => {
    this.setState({lastName: event.target.value})
    if (event.target.value === '') {
      this.setState({lastText: 'Required'})
    } else {
      this.setState({lastText: ''})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstText: 'Required'})
    }
    if (lastName === '') {
      this.setState({lastText: 'Required'})
    }
    if (firstName.length !== 0 && lastName.length !== 0) {
      this.setState(pre => ({isSubmit: !pre.isSubmit}))
    }
    if (firstName.length === 0 && lastName.length === 0) {
      this.setState({
        firstText: 'Required',
        lastText: 'Required',
      })
    }
  }

  render() {
    const {firstText, lastText, isSubmit} = this.state

    return (
      <div className="con">
        {isSubmit === true ? (
          <div className="another-response">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="img-form"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.submitAnotherResponse}>
              Submit another Response
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.submitForm}>
            <h1>Registration Form</h1>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onBlur={this.firstNameChange} />
            <p>{firstText}</p>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onBlur={this.lastNameChange} />
            <p>{lastText}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
