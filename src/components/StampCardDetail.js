import React, {Component} from 'react'
import StampCard from '../components/StampCard'

class StampCardDetail extends Component{
  render(){
    const id = parseInt(this.props.match.params.id)
    const stampCard = this.props.stamp_cards.find((stampCard) => stampCard.id === id)
    let deal
    stampCard ? deal = this.props.deals.find((deal) => deal.id === stampCard.deal_id) : deal=null
    return(
      <div>
        {stampCard && deal? < StampCard stamp_card={stampCard} deal={deal} id={id}  /> : null }
      </div>
    )
  }
}

export default StampCardDetail
