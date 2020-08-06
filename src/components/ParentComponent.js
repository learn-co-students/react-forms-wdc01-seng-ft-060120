import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export class ParentComponent extends Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form 
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleSubmit={this.handleSubmit}
          />
          <DisplayData formData={this.state}/>
      </div>
    )
  }
}

export default ParentComponent
