import React, {Component} from 'react'
import { Image, List } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class StoreCard extends Component{
  render(){
    return(
      <Link to={`/stores/${this.props.store.id}`}>
        <List.Item >}
          <Image avatar src='/images/avatar/small/helen.jpg' />
          <List.Content>
            <List.Header>{this.props.store.name}</List.Header>
          </List.Content>
        </List.Item>
    </Link>
    )
  }
}

export default StoreCard
