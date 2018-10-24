import React from 'react';
import {Link} from 'react-router-dom'

const DealCard = (props) => {

  const {deal} = props

  return (

    <div className="container-store">
      <Link to={`/stamp_card_confirmation/${deal.id}`}>
        <div className="store-card">
          <div className="thumbnail">
            <img className="left" src={deal.background_url} alt={deal.category}/>
          </div>
          <div className="right">
            <h4 className="deal-style">{deal.category}</h4>
          </div>
        </div>
      </Link>
    </div>



  )
}

export default DealCard;
