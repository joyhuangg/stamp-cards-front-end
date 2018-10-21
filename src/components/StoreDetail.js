import React, {Component} from 'react'
import DealCollection from '../containers/DealCollection'

class StoreDetail extends Component{
  render(){
    console.log(this.props)
    const id = parseInt(this.props.match.params.id)
    // debugger
    const store = this.props.stores.find((store) => store.id === id)
    return(
      <div>
        {store ? < DealCollection deals={this.props.deals} user={this.props.user} clickDeal={this.props.clickDeal} store={store}/> : null }
      </div>
    )
  }
}

export default StoreDetail
