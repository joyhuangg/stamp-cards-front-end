import React, {Component} from 'react'
import DealCard from '../components/DealCard'

const DealCollection = (props) => {
  const {deals, clickDeal, store} = props
  const filteredDeals = deals.filter(deal => deal.store_id === store.id)
  let renderDeals;
  filteredDeals.length > 0 ? renderDeals = filteredDeals.map(deal => <DealCard key={deal.id} deal={deal} clickDeal={clickDeal}/>) : renderDeals = "No Deals Available"


  return (
    <div>
      <h1>Deals</h1>
      {renderDeals}
    </div>
  )
}

export default DealCollection;
