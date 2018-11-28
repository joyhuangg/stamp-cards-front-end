import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class StampCard extends Component{
  render(){
    if (this.props.stamp_card.current_points === 6){
      return(
      <div className="each-stampcard">
        {/* start card */}
        <div className="ui raised red card centered">
          <div className="content">
            <div className="header">
              <span className="left floated">
                {/* change this to link to a /redeem/:id page */}
                <Link to={`/redeem/${this.props.stamp_card.id}`}>
                {/* change icon to be diff maybe? */}
                  <i  className="open envelope icon link"></i>
                </Link>
              </span>
              <span>
                {this.props.stamp_card.store.name}
              </span>
            </div>
            <div className="description">
              <div><p>Redeem: {this.props.stamp_card.deal.category}</p></div>
            </div>
          </div>

          <div className="extra content">
              <img className="left" src={this.props.stamp_card.store.icon_url} alt={this.props.stamp_card.store.name} />
          </div>
        </div>
        {/* end card */}
      </div>
      )
    }
    else{
      return(
      <div className="each-stampcard">
        {/* start card */}
        <div className="ui raised red card centered">
          <div className="content">
            <div className="header">
              <span className="left floated">
                <Link to={`/stamp_card_confirmation/${this.props.stamp_card.deal.id}`}>
                  <i  className="key icon link"></i>
                </Link>
              </span>
              <span>
                {this.props.stamp_card.store.name}
              </span>
            </div>
            <div className="description">
              <div><p>Deal: {this.props.stamp_card.deal.category}</p></div>
            </div>
          </div>

          <div className="extra content">
            {/* grid? */}
            <div className="ui grid">
              <div className="three column row">
                <div className="column">
                    {this.props.stamp_card.current_points > 0 ? (<i className="star big icon circular red"></i>) : (<i className="circle big blank icon circular "></i>)}
                </div>
                <div className="column">
                  {this.props.stamp_card.current_points > 1 ? (<i className="star big icon circular red"></i>) : (<i className="circle big blank icon circular "></i>)}
                </div>
                <div className="column">
                  {this.props.stamp_card.current_points > 2 ? (<i className="star big icon circular red"></i>) : (<i className="circle big blank icon circular"></i>)}
                </div>
              </div>

              <div className="three column row">
                <div className="column">
                  {this.props.stamp_card.current_points > 3 ? (<i className="star big icon circular red"></i>) : (<i className="circle big blank icon circular "></i>)}
                </div>
                <div className=" column">
                  {this.props.stamp_card.current_points > 4 ? (<i className="star big icon circular red"></i> ): (<i className="circle big blank icon circular "></i>)}
                </div>
                <div className=" column">
                  {this.props.stamp_card.current_points > 5 ? (<i className="star big icon circular red"></i>) : (<i className="circle big blank icon circular "></i>)}
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* end card */}
      </div>
      )
    }

  }
}

export default StampCard
