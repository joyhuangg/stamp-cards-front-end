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
    return(
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
              Project Name
            </Menu.Item>
            <Menu.Item><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item><Link to="/stamp_cards">See Stamp Cards</Link></Menu.Item>

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
