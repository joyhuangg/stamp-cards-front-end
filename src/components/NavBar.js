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
            {loggedIn ? ( <Menu.Item as='a' header>
                          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
                          Logged in
                        </Menu.Item>): ( <Menu.Item as='a' header>
                                      {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
                                      Project Name
                                    </Menu.Item>)}
            <Menu.Item><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item><Link to="/stamp_cards">See Stamp Cards</Link></Menu.Item>
            <Menu.Item>
            {loggedIn ? (<Link to="/login" onClick={this.props.handleLogout}>Logout</Link>) : <Link to="/login">Login</Link>}
            </Menu.Item>
            {/* <Menu.Item><Link to="/login">Login</Link></Menu.Item> */}
            {!loggedIn ? (<Menu.Item><Link to="/signup">Sign Up</Link></Menu.Item>) : null}
            {/* <Menu.Item><Link to="/">LogOut</Link></Menu.Item> */}


            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default NavBar
