import React, {Component} from 'react'
import DealCollection from '../containers/DealCollection'
import {withRouter} from 'react-router-dom'

class StoreDetail extends Component{
  render(){
    if (!!localStorage.getItem("token")){
      const id = parseInt(this.props.match.params.id)
      const store = this.props.stores.find((store) => store.id === id)
      return(
        <div>

          {store && this.props.deals ? <h1>{store.name}'s Deals'</h1> : null }
          {store && this.props.deals ? < DealCollection deals={this.props.deals} store={store}/> : null }

        </div>
      )
    }
    else{
      alert("Please Login!")
      this.props.history.push('/')
      return null
    }

  }
}

export default withRouter(StoreDetail)
