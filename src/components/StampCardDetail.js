import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import {Link, withRouter} from 'react-router-dom'

class StampCardDetail extends Component{

  render(){
    if (!!this.props.currentUser.id){
      const id = parseInt(this.props.match.params.id)
      const stampCard = this.props.stamp_cards.find((stampCard) => stampCard.id === id)
      // {/*<Link to='/stamp_cards'>See All Stampcards</Link>*/}
      return(



          <div className="stamp-collection">
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

{/* <div className="link-stamp"><Link to='/stamp_cards'>See All Stampcards</Link></div> */}
export default withRouter(StampCardDetail)
