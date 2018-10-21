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
    currentUser: null,
    currentDeal: null,
    stamp_cards: null
  }

  componentDidMount(){
    // Promise.all
    Promise.all([this.fetchStores(), this.getDeals(),this.getStampCards()])
  }

  // Get all stores
  fetchStores(){
    fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then(json => this.setState({stores: json}))
  }

  //redirect to store detail route
  handleStoreClick = (store) => {
    // this.setState({currentStore: store})
  }

  getDeals = () => {
    fetch('http://localhost:3000/deals')
      .then(res => res.json())
      .then(data => this.setState({deals: data}))
  }


  clickDeal = (deal) => {
    this.setState({currentDeal: deal})
  }

  getStampCards = () => {
    fetch('http://localhost:3000/stamp_cards')
      .then(res => res.json())
      .then(data => this.setState({stamp_cards: data}))
  }

  checkStampCard = () => {
    // console.log(this.state.currentDeal)
  }

  //redirect to store detail route
  handleStoreClick = (store) => {
    // this.setState({currentStore: store})
  }

  render() {
    console.log(this.state.stamp_cards)
    return (
      <div className="App">
        <header className="App-header">

          < NavBar />
          {/* need to break because they keep overlapping */}
          <br/>
          <br/>
          <br />
          <Route exact path="/" render={()=> < StorePage stores={this.state.stores} handleStoreClick ={this.handleStoreClick}/>} />
          <Route exact path="/stamp_card/:id" render={()=> < StampCardConfirmation />} />

          <Route exact path="/stamp_card_confirmation/:id" render={(routerProps) => < StampCardConfirmation {...routerProps} stamp_cards={this.state.stamp_cards} deals={this.state.deals}/>}/>
          <Route exact path="/stores/:id" render={(routerProps) => < StoreDetail {...routerProps} deals={this.state.deals} stores={this.state.stores} user={this.state.currentUser} clickDeal={this.clickDeal}/> } />

          <Route exact path="/stores" render={()=> < StorePage stores={this.state.stores} handleStoreClick ={this.handleStoreClick}/>} />
          <Route exact path="/stamp_cards" render={()=> < StampCardPage />} />


      </header>
      </div>
    );
  }
}

export default App;
