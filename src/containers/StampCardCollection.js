import React, {Component} from 'react'
import StampCard from '../components/StampCard'

class StampCardCollection extends Component{
  render(){
    const stampCards = this.props.stamp_cards.map((stamp_card) => <StampCard key={stamp_card.id} deal={stamp_card.deal} stamp_card={stamp_card}/>)
    return(
      <div>
        {stampCards}
      </div>
    )
  }
}

export default StampCardCollection
