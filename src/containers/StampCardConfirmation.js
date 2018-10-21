import React, {Component} from 'react'
import StampCardForm from '../components/StampCardForm'
import StampCard from '../components/StampCard'
import { withRouter } from "react-router-dom"

class StampCardConfirmation extends Component{

  state = {
    code: null
  }

  updateCode = (e) => {
    e.preventDefault()
    this.setState({code: e.target[0].value})
  }

  confirmedCode =(id) => {
    const foundDeal = this.props.deals.find(deal => deal.id === id)
    console.log(foundDeal)
    if (foundDeal) {
      return this.state.code === foundDeal.store_id.toString() ? <StampCard /> : null
    }
  }

  renderStampCard = (stamp_card) => <div><p>Current Points: {stamp_card.current_points}</p></div>

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
                <div>{this.props.postStampCard(id)}<p>Current Points: 0</p></div>
              :
               this.renderStampCard(stamp_card)}
               <StampCardForm updateCode={this.updateCode}/>
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

        {/* go back to previous page */}
        <button onClick={this.props.history.goBack}>Go Back</button>

        {/* check the code */}
        {this.confirmedCode(id)}

      </div>
    )
  }
}

export default withRouter(StampCardConfirmation)
