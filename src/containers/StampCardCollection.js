import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import {Container} from 'semantic-ui-react'

class StampCardCollection extends Component{
  render(){
    const stampCards = this.props.stamp_cards.map((stamp_card) => <StampCard key={stamp_card.id} deal={stamp_card.deal} stamp_card={stamp_card}/>)
    return(
      <Container>
        <div className="ui three column divided grid">
          {stampCards}
        </div>
      </Container>
    )
  }
}

export default StampCardCollection
