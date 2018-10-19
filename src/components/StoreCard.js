import React, {Component} from 'react'
import { Image, List } from 'semantic-ui-react'

class StoreCard extends Component{
  render(){
    return(
      <List.Item onClick={() => this.props.handleStoreClick(this.props.store)}>
        <Image avatar src='/images/avatar/small/helen.jpg' />
        <List.Content>
          <List.Header>{this.props.store.name}</List.Header>
          An excellent companion
        </List.Content>
      </List.Item>
    )
  }
}

export default StoreCard
