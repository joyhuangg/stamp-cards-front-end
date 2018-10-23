import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'



// general nav bar that will have Login, SignUp on Home Page
// Stores, StampCards, LogOut Link on Customer's sign in
// Deals, Customers link on future Store's admin sign in
class NavBar extends Component{
  render(){
    const loggedIn = !!this.props.currentUser.id;
    return(
      <div>
        <Menu fixed='top' inverted>
          <Container>
            {loggedIn ?  (<Dropdown item simple inverted text='Menu'>
                          <Dropdown.Menu >
                            <Dropdown.Item as={Link} to='/stores'>All Stores</Dropdown.Item>
                            <Dropdown.Item  as={Link}  to="/stamp_cards">See Stamp Cards</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/" onClick={this.props.handleLogout}>Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>): null}
            <Menu.Item><Link to='/'>Home</Link></Menu.Item>
            {/* <Menu.Item><Link to="/stamp_cards">See Stamp Cards</Link></Menu.Item> */}
            <Menu.Item>
            {loggedIn ? null : <Link to="/login">Login</Link>}
            </Menu.Item>
            {/* <Menu.Item><Link to="/login">Login</Link></Menu.Item> */}
            {!loggedIn ? (<Menu.Item><Link to="/signup">Sign Up</Link></Menu.Item>) : null}
            {/* <Menu.Item><Link to="/">LogOut</Link></Menu.Item> */}



          </Container>
        </Menu>
      </div>
    )
  }
}

export default NavBar
