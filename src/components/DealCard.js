import React from 'react';
import {Link} from 'react-router-dom'

const DealCard = (props) => {
  const {deal, clickDeal} = props

  return (
    <Link to="/stamp_card_confirmation">
    <div className="ui card" onClick={() => clickDeal(deal)}>
      <div className="content">
        <div className="header">
          {deal.category}
        </div>
        <div className="description">
          <p>{deal.description}</p>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default DealCard;
