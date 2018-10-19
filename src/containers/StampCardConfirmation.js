import React, {Component} from 'react'

class StampCardConfirmation extends Component{
  render(){
    if (this.props.stamp_cards === null) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <h1>StampCardConfirmation Component</h1>
        {/* start card */}
        <div className="ui card">
          <div className="content">
            <i className="right floated like icon"></i>
            <i className="right floated star icon"></i>
            <div className="header">StampCard</div>
            <div className="description">
              {this.props.stamp_cards.map(stampcard => <p key={stampcard.id}>{stampcard.current_points}</p>)}
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

export default StampCardConfirmation
