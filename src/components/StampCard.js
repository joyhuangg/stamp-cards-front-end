import React, {Component} from 'react'

class StampCard extends Component{

  render(){
    return(
    <div>
      {/* start card */}
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.stamp_card.store.name}</div>
          <div className="description">
            <div><p>Deal Description: {this.props.stamp_card.deal.category}</p></div>
             <div><p>Current Points: {this.props.stamp_card.current_points}</p></div>
          </div>
        </div>
        <div className="extra content">

          {/* grid? */}
          <div class="ui grid">
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
            <div class="three wide column">
              <div class="ui segment">
              </div>
            </div>
          </div>




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
