import React, {Component} from 'react'
import StampCardForm from '../components/StampCardForm'
import StampCard from '../components/StampCard'
import { withRouter } from "react-router-dom"

class StampCardConfirmation extends Component{

  state = {
    //code should be store id not deal id, just for ease of stores to use 1 id to verify all deals
    id: parseInt(this.props.match.params.id),
    deal: this.props.deals.find(de => de.id === parseInt(this.props.match.params.id)),
    // will change this later to be && statement that user -deal association exists
    stamp_card: this.props.stamp_cards.find(st => st.deal_id === parseInt(this.props.match.params.id)),
    code: null
  }

  //probably need to make this part of App so that
  //I can update the list of stampcards
  //need to pass it the store_id it needs to match as well as the
  //event target value in order to inspect and then control
  //whether to post or patch the points of the stampcard
  //also need to redirect based on input passing or not
  updateCode = (e, props) => {
    e.preventDefault()
    let code = parseInt(e.target[0].value)
    let newProps = {...props}
    newProps.code = code
    this.props.verifyCode(e, newProps)
    // this.setState({code: e.target[0].value})
    // {/* check the code */}
    // {this.confirmedCode(this.state.id)}
  }



  // confirmedCode =(id) => {
  //   const foundDeal = this.props.deals.find(deal => deal.id === id)
  //   console.log(foundDeal)
  //   if (foundDeal) {
  //     return this.state.code === foundDeal.store_id.toString() ? <StampCard /> : null
  //   }
  // }

  render(){
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
        <div>
          <h1>Enter Store Code:</h1>

          < StampCard stamp_card={stamp_card} deal={deal} id={id}  />
          < StampCardForm updateCode={this.updateCode} stamp_card={stamp_card} deal={deal} store={deal.store}/>

          {/* go back to previous page */}
          <button onClick={this.props.history.goBack}>Go Back</button>


        </div>
      )
    }





  }
}

export default withRouter(StampCardConfirmation)
