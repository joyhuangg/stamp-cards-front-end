import React, {Component} from 'react'
import StampCard from '../components/StampCard'
import { withRouter } from "react-router-dom"

class Redeem extends Component{


  updateCode = (e, props) => {
    e.preventDefault()
    let code = parseInt(e.target[0].value)
    let newProps = {...props}
    newProps.code = code
    this.props.verifyCode(e, newProps)
  }

  handleClick = (e) => {
    const id = parseInt(this.props.match.params.id)
    let stamp_card = this.props.stamp_cards.find(st => st.id === id)
    this.props.handleRedemption(e, stamp_card)
  }


  render(){
    if (!!localStorage.getItem("token")){
      const id = parseInt(this.props.match.params.id)
      let stamp_card = this.props.stamp_cards.find(st => st.id === id)
      if (this.props.stamp_cards === null ||!stamp_card) {
        return <div>Loading...</div>
      }
      else{
        let deal = stamp_card.deal
        return(

          <div className="stamp_card">
            <h1 className="stamp-top">Press Button to Redeem Stamp Card</h1>

            <StampCard stamp_card={stamp_card} deal={deal} id={id} />

            {/* <StampCardForm updateCode={this.updateCode} stamp_card={stamp_card} deal={deal} store={deal.store}/> */}

            {/* go back to previous page */}
            <button onClick={this.handleClick}>REDEEM</button>


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

export default withRouter(Redeem)
