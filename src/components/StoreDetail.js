import React, {Component} from 'react'
import DealCollection from '../containers/DealCollection'

class StoreDetail extends Component{
  render(){
    const id = parseInt(this.props.match.params.id)
    const store = this.props.stores.find((store) => store.id === id)
    return(
      <div>
        {store && this.props.deals ? < DealCollection deals={this.props.deals} store={store}/> : null }
      </div>
    )
  }
}

export default StoreDetail
