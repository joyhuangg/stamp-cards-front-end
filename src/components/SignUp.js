import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignUp extends React.Component{
  state = {
    name: "",
    username: "",
    password: "",
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignUpSubmit(e, this.state)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    return(
      <Form onSubmit={this.handleSignUpSubmit}>
        <h1>Create New User</h1>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name="name" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name="username" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder='Password' name="password" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}



export default SignUp
