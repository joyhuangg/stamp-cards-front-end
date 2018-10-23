import React, {Component} from 'react'
import StampCard from '../components/StampCard'

class StampCardCollection extends Component{
  render(){
    const stampCards = this.props.stamp_cards.map((stamp_card) => <StampCard key={stamp_card.id} deal={stamp_card.deal} stamp_card={stamp_card}/>)
    return(
      <div>
        <h1> {this.props.currentUser.username}'s Stamp Cards</h1>
        {stampCards}
      </div>
    )
  }
}

export default StampCardCollection
