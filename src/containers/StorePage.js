import React, {Component} from 'react'
import Filter from '../components/Filter'
import StoreCollection from './StoreCollection'

class StorePage extends Component{


//needs conditional, if store is already linked to customer by stampcard, then we generate th StampCardConfirmation
//page else we generate the deals page
  render(){
    return(
      <div>
        < Filter stores={this.props.stores}/>

        < StoreCollection stores={this.props.stores}/>
      </div>
    )
  }


}

export default StorePage
