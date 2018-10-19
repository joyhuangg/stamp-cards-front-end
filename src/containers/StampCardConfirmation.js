import React, {Component} from 'react'

class StampCardConfirmation extends Component{
  render(){
    return(
      <div>
        <h1>StampCardConfirmation Component</h1>
        {/* start card */}
        <div class="ui card">
          <div class="content">
            <i class="right floated like icon"></i>
            <i class="right floated star icon"></i>
            <div class="header">Cute Dog</div>
            <div class="description">
              <p></p>
            </div>
          </div>
          <div class="extra content">
            <span class="left floated like">
              <i class="like icon"></i>
              Like
            </span>
            <span class="right floated star">
              <i class="star icon"></i>
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
