import React, {Component} from 'react'
import { Image, List, Grid, Divider } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class StoreCard extends Component{
  render(){
    return(

      <div className="container-store">
        <Link to={`/stores/${this.props.store.id}`}>
          <div className="store-card">
            <div className="thumbnail">
              <img className="left" src={this.props.store.icon_url} alt={this.props.store.name} />
            </div>
            <div className="right">
              <h4>{this.props.store.name}</h4>
              <p>{this.props.store.description}</p>
              <p className="web-link">abc.com</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default StoreCard
