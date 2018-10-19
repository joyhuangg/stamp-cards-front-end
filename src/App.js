import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import StorePage from './containers/StorePage'
import StampCardConfirmation from './containers/StampCardConfirmation'
import StoreDetail from './components/StoreDetail'
import StampCardDetail from './components/StampCardDetail'
import StampCardPage from './containers/StampCardPage'
import DealCollection from './containers/DealCollection'
import {Route,Switch} from 'react-router-dom';


//should have state, and lots of conditional renders or routes to link to different
//places of the app
//NavBar is always rendered but maybe renders different things depending on if someone is
//logged in as a customer or later on store
class App extends Component {
  state = {
    stores: [],
    deals: [],
    currentPage: "StorePage",
    currentStore: null,
  }

  componentDidMount(){
    this.fetchStores()
    this.getDeals()
  }

  getDeals = () => {
    fetch('http://localhost:3000/deals')
      .then(res => res.json())
      .then(data => this.setState({deals: data}))
  }


  clickDeal = (deal) => {
    console.log(deal)

  }


  // Get all stores
  fetchStores(){
    fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then(json => this.setState({stores: json}))
  }


  //redirect to store detail route
  handleStoreClick = (store) => {
    this.setState({currentPage: "StoreDetail", currentStore: store})
  }


  //change this to routes!!!
  getComponent(){
    let component;
    switch(this.state.currentPage) {
      case "StorePage":
        component = < StorePage stores={this.state.stores} handleStoreClick ={this.handleStoreClick}/>;
        break;
      case "StoreDetail":
        component = < StoreDetail deals={this.state.deals} store={this.state.currentStore} clickDeal={this.clickDeal}/>;
        break;
      case "StampCardConfirmation":
        component = < StampCardConfirmation />;
        break;
      case "StampCardDetail":
        component = < StampCardDetail />
        break;
      case "StampCardPage":
        component = < StampCardPage />
        break;
    }
    return component
  }
  render() {


    return (
      <div className="App">
        <header className="App-header">

          < NavBar />
          {/* need to break because they keep overlapping */}
          <br/>
          <br/>
          <br />
          {this.getComponent()}

      </header>
      </div>
    );
  }
}

export default App;
