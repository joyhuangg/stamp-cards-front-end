import React, {Component} from 'react'
import StoreCard from '../components/StoreCard'
// import { Image, List } from 'semantic-ui-react'


class StoreCollection extends Component{
  render(){
    const stores = this.props.stores.map((store) => {
      return < StoreCard store={store} key={store.id} />
    })

    return(
      <div>
        {/* <h1 className="store-saying">Best Stores in Town</h1> */}
          {stores}
      </div>
    )
  }
}

export default StoreCollection
