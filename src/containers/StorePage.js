import React, {Component} from 'react'
import Filter from '../components/Filter'
import StoreCollection from './StoreCollection'

class StorePage extends Component{
//needs conditional, if store is already linked to customer by stampcard, then we generate th StampCardConfirmation
//page else we generate the deals page
  render(){
    if (!!this.props.currentUser.id){
      const stores = this.props.renderStores()
      return(
        <div>
          <Filter stores={stores} handleSearch={this.props.handleSearch}/>

          <StoreCollection stores={stores} />
        </div>
      )
    }
    else{
      return(
        <div>
          Loading...
        </div>
      )
    }

  }


}

export default StorePage
