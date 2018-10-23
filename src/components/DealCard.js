import React from 'react';
import {Link} from 'react-router-dom'

const DealCard = (props) => {

  const {deal} = props

  return (
    <Link to={`/stamp_card_confirmation/${deal.id}`}>
      <div className="ui card">
        <div className="content">
          <div className="header">
            {deal.category}
          </div>
          {/* <div className="description"> */}
            {/* <p>{deal.description}</p> */}
          {/* </div> */}
          <div>
            <img src={deal.background_url} alt=""/>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default DealCard;
