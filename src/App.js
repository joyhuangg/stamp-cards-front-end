import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import StorePage from './containers/StorePage'
import StampCardConfirmation from './containers/StampCardConfirmation'
import StoreDetail from './components/StoreDetail'
import StampCardDetail from './components/StampCardDetail'
import StampCardPage from './containers/StampCardPage'
import DealCollection from './containers/DealCollection'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {Route,Switch, Redirect, withRouter} from 'react-router-dom';
import _ from 'lodash'


//should have state, and lots of conditional renders or routes to link to different
//places of the app
//NavBar is always rendered but maybe renders different things depending on if someone is
//logged in as a customer or later on store
class App extends Component {

  state = {
    auth: {currentUser: {}},
    newUser: {
      username: "",
      name: "",
      password: ""
    },
    stores: [],
    deals: [],
    stamp_cards: [],
    searchTerm: '',
    allStores: [],
  }

  handleSearch = (e, value) => {
    this.setState({searchTerm: value}, () => {
      let newStores = [...this.state.allStores]
      const re = new RegExp(_.escapeRegExp(this.state.searchTerm), 'i')
      let filteredStores
      this.state.searchTerm ? filteredStores = newStores.filter(store => re.test(store.name)) : filteredStores = this.state.allStores
      this.setState({stores: filteredStores})
    })

  }


  componentDidMount(){
    const token = localStorage.getItem("token")
    if (!!token){
      Promise.all([this.getCurrentUser(token), this.fetchStores(), this.getDeals(),this.getStampCards()])
    }
  }

  handleLogin = (resp) => {
    const currentUser = {currentUser:resp.customer};
    localStorage.setItem("token", resp.token);
    this.setState({auth: currentUser}, () => Promise.all([this.fetchStores(), this.getDeals(),this.getStampCards()]))

    console.log("LOGGED IN")
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({auth: {currentUser: {}}})
    console.log("SIGNED OUT")
  }

  handleSignUpSubmit = (e, obj) => {
    this.setState({newUser: obj})
    fetch("http://localhost:3000/customers",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")

      },
      body: JSON.stringify(obj)
    })
    .then(resp => this.props.history.push("/login"))
    console.log("SIGNED UP")
  }

  // Get all stores
  fetchStores = () => {
    fetch("http://localhost:3000/stores", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(json => this.setState({stores: json, allStores: json}))
  }

  getDeals = () => {
    fetch('http://localhost:3000/deals', {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({deals: data}))
  }

  getCurrentUser = (token) => {
    fetch('http://localhost:3000/current_user', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token
      }
    })
    .then(res => res.json())
    .then(user => {
      const currentUser = {currentUser: user};
      console.log({auth: currentUser})
      this.setState({auth: currentUser});
    })
  }

  getStampCards = () => {
    fetch('http://localhost:3000/stamp_cards', {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => this.setState({stamp_cards: data}))
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
      alert("Employee Verification Incorrect. Try again.")
      //stay on stampcardconfirmation page
    }
  }

  postStampCard = (deal_id) => {
    let newStampCards = [...this.state.stamp_cards]
    let deal = this.state.deals.find(deal => deal.id === deal_id)
    let id
    fetch('http://localhost:3000/stamp_cards', {
      method: 'POST',
      headers: {"Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
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
    // let idx
    fetch(`http://localhost:3000/stamp_cards/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      let i = newStampCards.findIndex((st) => st.id === id)
      ++newStampCards[i].current_points
      this.setState({stamp_cards: newStampCards}, () => {this.props.history.push(`/stamp_cards/${id}`)})
      //redirect to show page here?
    })
    .catch((error) => { console.log(error)} )
  }

  render() {
    return (
      <div className="App">
          <header>
            < NavBar handleLogout={this.handleLogout} currentUser={this.state.auth.currentUser}/>
          </header>
          {/* need to break because they keep overlapping */}
          <div className="fix-form">
            <Route exact path="/" render={()=> <Login handleLogin={this.handleLogin} />} />
            <Route exact path="/login" render={()=> <Login  handleLogin={this.handleLogin}/>} />
            <Route exact path="/signup" render={()=> <SignUp handleSignUpSubmit={this.handleSignUpSubmit}/>} />
          </div>

          <Route exact path="/stores" render={()=> <StorePage stores={this.state.stores} handleSearch={this.handleSearch} currentUser={this.state.auth.currentUser}/>}/>

          <Route exact path="/stores/:id" render={(routerProps) => <StoreDetail {...routerProps} deals={this.state.deals} stores={this.state.stores}/> } />
          <Route exact path="/stamp_card_confirmation/:id" render={(routerProps) => <StampCardConfirmation {...routerProps} stamp_cards={this.state.stamp_cards} verifyCode={this.verifyCode} deals={this.state.deals}/>}/>
          <Route exact path="/stamp_cards/:id" render={(routerProps)=> <StampCardDetail {...routerProps} stamp_cards={this.state.stamp_cards}  deals={this.state.deals} />} />
          <Route exact path="/stamp_cards" render={()=> <StampCardPage stamp_cards={this.state.stamp_cards}  deals={this.state.deals} currentUser={this.state.auth.currentUser}/>} />

        </div>
    );
  }
}

export default withRouter(App);
