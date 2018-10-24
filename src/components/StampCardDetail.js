import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import {Link} from 'react-router-dom'

class StampCardDetail extends Component{

  render(){
    const id = parseInt(this.props.match.params.id)
    const stampCard = this.props.stamp_cards.find((stampCard) => stampCard.id === id)
    return(
        <div className="stamp-collection">
          {stampCard ? <StampCard stamp_card={stampCard} id={id} /> : null }
        </div>
    )
  }
}

{/* <div className="link-stamp"><Link to='/stamp_cards'>See All Stampcards</Link></div> */}
export default StampCardDetail
