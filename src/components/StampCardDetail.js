import React, {Component} from 'react'
import StampCard from '../components/StampCard'

class StampCardDetail extends Component{

  render(){
    const id = parseInt(this.props.match.params.id)
    const stampCard = this.props.stamp_cards.find((stampCard) => stampCard.id === id)
    return(
      <div>
        {stampCard ? < StampCard stamp_card={stampCard}  id={id}  /> : null }
      </div>
    )
  }
}

export default StampCardDetail
