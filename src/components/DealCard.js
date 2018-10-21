import React from 'react';
import {Link} from 'react-router-dom'

const DealCard = (props) => {
  const {deal, clickDeal, user} = props
  return (
    // <Link to={`/stores/${props.store.id}`}>
    <Link to={`/stamp_card_confirmation/${deal.id}`}>
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
