import React, {Component} from 'react'

class StampCard extends Component{

  render(){
    return(
    <div>
      <h1>StampCard Component</h1>
      {/* start card */}
      <div className="ui card">
        <div className="content">
          <i className="right floated like icon"></i>
          <i className="right floated star icon"></i>
          <div className="header">{this.props.deal.store.name}</div>
          <div className="description">
            <div><p>Deal Description: {this.props.deal.description}</p></div>
             <div><p>Current Points: {this.props.stamp_card.current_points}</p></div>
          </div>
        </div>
        <div className="extra content">
          <span className="left floated like">
            <i className="like icon"></i>
            Like
          </span>
          <span className="right floated star">
            <i className="star icon"></i>
            Favorite
          </span>
        </div>
      </div>
      {/* end card */}
    </div>
    )
  }
}

export default StampCard
