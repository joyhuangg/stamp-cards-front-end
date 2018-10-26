import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Menu, Segment } from 'semantic-ui-react'



// general nav bar that will have Login, SignUp on Home Page
// Stores, StampCards, LogOut Link on Customer's sign in
// Deals, Customers link on future Store's admin sign in
class NavBar extends Component{

  state = {
    height: 0
  }

  // toggleMenu = () => {
  //   this.setState({showedMenu: !this.state.showedMenu})
  // }

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
          <li><Link to="/stores">All Stores</Link></li>
          <li><Link to="/stamp_cards">See Stamp Cards</Link></li>
          <li><Link to="/" onClick={this.props.handleLogout}>Logout</Link></li></div>)
          : (<div>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            </div>)}
        </ul>

      </div>
    )
  }
}

export default withRouter(NavBar)
