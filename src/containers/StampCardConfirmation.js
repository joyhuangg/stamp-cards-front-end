import React, {Component} from 'react'
import StampCardForm from '../components/StampCardForm'
import StampCard from '../components/StampCard'
import { withRouter } from "react-router-dom"
import { Container } from "semantic-ui-react"

class StampCardConfirmation extends Component{

  state = {
    //code should be store id not deal id, just for ease of stores to use 1 id to verify all deals
    id: parseInt(this.props.match.params.id),
    deal: this.props.deals.find(de => de.id === parseInt(this.props.match.params.id)),
    // will change this later to be && statement that user -deal association exists
    stamp_card: this.props.stamp_cards.find(st => st.deal_id === parseInt(this.props.match.params.id)),
    code: null
  }

  updateCode = (e, props) => {
    e.preventDefault()
    let code = parseInt(e.target[0].value)
    let newProps = {...props}
    newProps.code = code
    this.props.verifyCode(e, newProps)
  }


  render(){
    if (!!this.props.currentUser.id){
      const id = parseInt(this.props.match.params.id)
      let deal = this.props.deals.find((deal) => deal.id === id)
      let stamp_card = this.props.stamp_cards.find(st => st.deal_id === parseInt(this.props.match.params.id))
      if (!stamp_card && deal){
        stamp_card =  {
                    customer_id: 1,
                    deal_id: this.state.id,
                    current_points: 0,
                    deal: deal,
                    store: deal.store
                  }
      }
      if (this.props.stamp_cards === null || !deal || !deal.store ||!stamp_card) {
        return <div>Loading...</div>
      }
      else{
        return(

          <div className="stamp_card">
            <h1 className="stamp-top">Enter Store Code:</h1>

            <StampCard stamp_card={stamp_card} deal={deal} id={id} />

            <StampCardForm updateCode={this.updateCode} stamp_card={stamp_card} deal={deal} store={deal.store}/>

            {/* go back to previous page */}
            <button onClick={this.props.history.goBack}>Go Back</button>


          </div>
        )
      }
    }
    else{
      alert("Please Login!")
      this.props.history.push('/')
      return null
    }
  }
}

export default withRouter(StampCardConfirmation)
