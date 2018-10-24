import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import {Container} from 'semantic-ui-react'

class StampCardCollection extends Component{
  render(){
    const stampCards = this.props.stamp_cards.map((stamp_card) => <StampCard key={stamp_card.id} deal={stamp_card.deal} stamp_card={stamp_card}/>)
    return(

      <div>
        <div>
          <h1>Stamp Card Collection</h1>
        </div>
        <div className="stamp-collection">
            {stampCards}
        </div>
      </div>
    )
  }
}

export default StampCardCollection
