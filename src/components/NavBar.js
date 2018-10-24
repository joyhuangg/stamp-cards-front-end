import React, {Component} from 'react'
import { Link } from 'react-router-dom'

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
    const loggedIn = !!this.props.currentUser.id
    return(
      <div>


        <a href="" class="logo">Go Stamp</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          {loggedIn ? (<div>
          <li><Link to="/stores">All Stores</Link></li>
          <li><Link to="/stamp_cards">See Stamp Cards</Link></li>
          <li><Link to="/login" onClick={this.props.handleLogout}>Logout</Link></li></div>)
          : null}
          {loggedIn ? null : <li><Link to="/login" onClick={this.props.handleLogout}>Logout</Link></li>}
          {!loggedIn ? (<li><Link to="/singup">Sign Up</Link></li>) : null}
        </ul>



        {/* <Menu fixed='top' inverted>
          <Container>
            {loggedIn ?  (<Dropdown item simple inverted text='Menu'>
                          <Dropdown.Menu >
                            <Dropdown.Item as={Link} to='/stores'>All Stores</Dropdown.Item>
                            <Dropdown.Item  as={Link}  to="/stamp_cards">See Stamp Cards</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/login" onClick={this.props.handleLogout}>Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>): null}
            {loggedIn ? null : <Menu.Item><Link to="/login">Login</Link></Menu.Item>}
            {!loggedIn ? (<Menu.Item><Link to="/signup">Sign Up</Link></Menu.Item>) : null}
          </Container>
        </Menu> */}
      </div>
    )
  }
}

export default NavBar
