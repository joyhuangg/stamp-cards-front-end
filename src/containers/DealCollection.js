import React, {Component} from 'react'
import DealCard from '../components/DealCard'

const DealCollection = (props) => {
  const {deals, clickDeal} = props

  const renderDeals = deals.map(deal => <DealCard key={deal.id} deal={deal} clickDeal={clickDeal}/>)

  return (
    <div>
      <h1>Deals</h1>
      {renderDeals}
    </div>
  )
}

export default DealCollection;
