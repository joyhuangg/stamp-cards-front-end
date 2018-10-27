import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import {withRouter} from 'react-router-dom'

class StampCardDetail extends Component{

  render(){
    if (!!this.props.currentUser.id){
      const id = parseInt(this.props.match.params.id)
      const stampCard = this.props.stamp_cards.find((stampCard) => stampCard.id === id)
      // {/*<Link to='/stamp_cards'>See All Stampcards</Link>*/}
      return(



          <div className="stamp-collection">
            {/* <h1> Your Updated StampCard </h1> */}
            {stampCard ? <StampCard stamp_card={stampCard} id={id} /> : null }
          </div>


      )
    }
    else{
      alert("Please Login!")
      this.props.history.push('/')
      return null
    }
  }
}

export default withRouter(StampCardDetail)
