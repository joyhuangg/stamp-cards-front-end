import React, {Component} from 'react'
import DealCollection from '../containers/DealCollection'

class StoreDetail extends Component{
  render(){
    const id = parseInt(this.props.match.params.id)
    const store = this.props.stores.find((store) => store.id === id)
    return(
      <div>
        {store ? < DealCollection deals={this.props.deals} clickDeal={this.props.clickDeal} store={store}/> : null }
      </div>
    )
  }
}

export default StoreDetail
