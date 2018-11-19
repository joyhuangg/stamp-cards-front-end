import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'



// general nav bar that will have Login, SignUp on Home Page
// Stores, StampCards, LogOut Link on Customer's sign in
// Deals, Customers link on future Store's admin sign in
class NavBar extends Component{

  // toggleMenu = () => {
  //   this.setState({showedMenu: !this.state.showedMenu})
  // }

  state = {
    checked: false
  }

  toggle = () => {
    this.setState({checked: !this.state.checked})
  }

  handleStore = () => {
    document.querySelector('.menu-btn').checked = this.toggle()
    this.props.history.push('/stores')
  }

  handleStampCard = () => {
    document.querySelector('.menu-btn').checked = this.toggle()
    this.props.history.push('/stamp_cards')
  }

  handleLogOut = () => {
    document.querySelector('.menu-btn').checked = this.toggle()
    this.props.history.push('/')
    this.props.handleLogout()
  }

  handleSignup = () => {
    document.querySelector('.menu-btn').checked = this.toggle()
    this.props.history.push('/signup')
  }

  handleLogin = () => {
    document.querySelector('.menu-btn').checked = this.toggle()
    this.props.history.push('/login')
  }

  render(){
    let loggedIn
    if (this.props.currentUser === undefined){
      alert("Incorrect Password or Username")
      loggedIn = false;
    }else{
      loggedIn = !!this.props.currentUser.id
    }
    return(
      <div>
        <Link to="/" class="logo">Go Stamp!</Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          {loggedIn ? (<div>
          <li onClick={this.handleStore}>All Stores</li>
          <li onClick={this.handleStampCard}>See Stamp Cards</li>
          <li onClick={this.handleLogOut}>Log Out</li></div>)
          : (<div>
            <li onClick={this.handleLogin}>Login</li>
            <li onClick={this.handleSignup}>Sign Up</li>
            </div>)}
        </ul>

      </div>
    )
  }
}

export default withRouter(NavBar)
