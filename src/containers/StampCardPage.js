import React, {Component} from 'react'
import StampCardCollection from './StampCardCollection'

class StampCardPage extends Component{
  render(){
    return(
      <div className="stamp-card-grid">
        <h1>Stamp Card Collection</h1>
        <StampCardCollection stamp_cards={this.props.stamp_cards} currentUser={this.props.currentUser}/>
      </div>

    )
  }
}

export default StampCardPage
