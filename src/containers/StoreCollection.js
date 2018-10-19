import React, {Component} from 'react'
import StoreCard from '../components/StoreCard'
import { Image, List } from 'semantic-ui-react'


class StoreCollection extends Component{

  handleStoreClick = (store) => {
    this.props.handleStoreClick(store)
  }
  render(){

    const stores = this.props.stores.map((store) => {
      return < StoreCard store={store} key={store.id} handleStoreClick={this.handleStoreClick} />
    })

    return(
      <div>
        <h1>Stores</h1>
        <List celled>
          {stores}
        </List>
      </div>
    )
  }
}

export default StoreCollection
