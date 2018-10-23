import React, {Component} from 'react'
import DealCard from '../components/DealCard'
import { withRouter } from "react-router-dom"
import { Image, List } from 'semantic-ui-react'

const DealCollection = (props) => {
  const {deals, store} = props
  // debugger
  const filteredDeals = deals.filter(deal => deal.store_id === store.id)
  let renderDeals;
  filteredDeals.length > 0 ? renderDeals = filteredDeals.map(deal => <DealCard key={deal.id} deal={deal}/>) : renderDeals = "No Deals Available"


  return (
    <div className="deal-collection">
      <h1>Deals for {store.name}</h1>
      <List celled>
      {renderDeals}
      </List>
      <button onClick={props.history.goBack}>Go Back</button>
    </div>
  )
}

export default withRouter(DealCollection)
