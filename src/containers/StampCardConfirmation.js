import React, {Component} from 'react'

class StampCardConfirmation extends Component{

  form = () => <div><form>
        <label htmlFor="code">Enter Code</label>
        <input type="text" id="code" name="code"/>
        <input type="submit"/>
      </form></div>

  renderStampCard = (stamp_card) => <div><p>Current Points: {stamp_card.current_points}</p> {this.form()} </div>

  render(){
    if (this.props.stamp_cards === null) {
      return <div>Loading...</div>
    }
    const id = parseInt(this.props.match.params.id)
    const stamp_card = this.props.stamp_cards.find(st => st.deal_id === id)

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

              {!stamp_card ?
                <div>{this.props.postStampCard(id)}<p>Current Points: 0</p> {this.form()} </div>
              :
               this.renderStampCard(stamp_card)}
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
