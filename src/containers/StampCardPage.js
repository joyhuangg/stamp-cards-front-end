import React, {Component} from 'react'
import StampCardCollection from './StampCardCollection'

class StampCardPage extends Component{
  render(){
    return(
      <StampCardCollection stamp_cards={this.props.stamp_cards} currentUser={this.props.currentUser}/>
    )
  }
}

export default StampCardPage
