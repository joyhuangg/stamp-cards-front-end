import React from 'react';

const DealCard = (props) => {
  const {deal, clickDeal} = props

  return (
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
  )
}

export default DealCard;
