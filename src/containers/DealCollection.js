import React, {Component} from 'react'
import DealCard from '../components/DealCard'

const DealCollection = (props) => {
  const {deals, clickDeal, store} = props

  const renderDeals = deals.filter(deal => deal.store_id === store.id).map(deal => <DealCard key={deal.id} deal={deal} clickDeal={clickDeal}/>)


  return (
    <div>
      <h1>Deals</h1>
      {renderDeals}
    </div>
  )
}

export default DealCollection;
