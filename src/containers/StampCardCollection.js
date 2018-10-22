import React, {Component} from 'react'
import StampCard from '../components/StampCard'

class StampCardCollection extends Component{
  render(){
    const renderStampCard = this.props.stamp_cards.map(st => <StampCard key={st.id} stamp_card={st} deal={st.deal} />)
    return(
      <div>
        {renderStampCard}
      </div>
    )
  }
}

export default StampCardCollection
