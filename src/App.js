import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import StorePage from './containers/StorePage'
import StampCardConfirmation from './containers/StampCardConfirmation'
import StoreDetail from './components/StoreDetail'
import StampCardDetail from './components/StampCardDetail'
import StampCardPage from './containers/StampCardPage'
import DealCollection from './containers/DealCollection'
import {Route,Switch, Redirect, withRouter} from 'react-router-dom';


//should have state, and lots of conditional renders or routes to link to different
//places of the app
//NavBar is always rendered but maybe renders different things depending on if someone is
//logged in as a customer or later on store
class App extends Component {

  state = {
    stores: [],
    deals: [],
    stamp_cards: [],
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

  getDeals = () => {
    fetch('http://localhost:3000/deals')
      .then(res => res.json())
      .then(data => this.setState({deals: data}))
  }

  getStampCards = () => {
    fetch('http://localhost:3000/stamp_cards')
      .then(res => res.json())
      .then(data => this.setState({stamp_cards: data}))
  }

  postStampCard = (deal_id) => {
    let newStampCards = [...this.state.stamp_cards]
    let deal = this.state.deals.find(deal => deal.id === deal_id)
    let id
    fetch('http://localhost:3000/stamp_cards', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        customer_id: 1,
        deal_id: deal_id,
        deal: deal,
        current_points: 1
      })
    })
    .then(res => res.json())
    .then(data => {
      id = data.id
      newStampCards.push(data)})
    .then(r => {
      this.setState({stamp_cards: newStampCards})
      //redirect to show page here
      this.props.history.push(`/stamp_cards/${id}`)
    }).catch((error) => { console.log(error)} )

  }

  patchStampCard = (id, body) => {
    let newStampCards = [...this.state.stamp_cards]
    fetch(`http://localhost:3000/stamp_cards/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      let i = newStampCards.findIndex((st) => st.id === id)
      newStampCards[i] = data
    })
    .then(r => {
      this.setState({stamp_cards: newStampCards})
      //redirect to show page here?
      this.props.history.push(`/stamp_cards/${id}`)
      }).catch((error) => { console.log(error)} )
  }


  verifyCode = (e, props) => {

   e.preventDefault()
    // if input code matches store id
    if(props.store.id === props.code ){
      //if stampcard has 0 (post new stamp card)
      if (props.stamp_card.current_points === 0){
        this.postStampCard(props.deal.id)
        //redirect to show detail page
      }
      // if stampcard has more than one, find stampcard by id, increment
      else if (props.stamp_card.current_points < props.deal.max_points){
        let newCard = {...props.stamp_card}
        //its current_points by one, and patch that stampcard
        newCard.current_points += 1
        this.patchStampCard(props.stamp_card.id, newCard)
        console.log("Correct code, making patch request")

        //redirect to show detail page
      }
      else{
        alert("Stamp Card Full")
      }

    }
      //else if not a match
    else{
      //alert "Employee Verification Incorrect"
      alert("Employee Verification Incorrect. Try again.")
      //redirect to stampcardconfirmation page
    }





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

          <Route exact path="/" render={()=> < StorePage stores={this.state.stores} />} />
          <Route exact path="/stores" render={()=> < StorePage stores={this.state.stores}/>} />
          <Route exact path="/stores/:id" render={(routerProps) => < StoreDetail {...routerProps} deals={this.state.deals} stores={this.state.stores}/> } />
          <Route exact path="/stamp_card_confirmation/:id" render={(routerProps) => < StampCardConfirmation {...routerProps} stamp_cards={this.state.stamp_cards} verifyCode={this.verifyCode} deals={this.state.deals}/>}/>
          <Route exact path="/stamp_cards/:id" render={(routerProps)=> < StampCardDetail {...routerProps} stamp_cards={this.state.stamp_cards}  deals={this.state.deals} />} />
          <Route exact path="/stamp_cards" render={()=> < StampCardPage stamp_cards={this.state.stamp_cards}  deals={this.state.deals} />} />

      </header>
      </div>
    );
  }
}

export default withRouter(App);
