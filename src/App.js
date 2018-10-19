import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import StorePage from './containers/StorePage'
import StampCardConfirmation from './containers/StampCardConfirmation'
import StoreDetail from './components/StoreDetail'
import StampCardDetail from './components/StampCardDetail'
import StampCardPage from './containers/StampCardPage'
import {Route,Switch} from 'react-router-dom';


//should have state, and lots of conditional renders or routes to link to different
//places of the app
//NavBar is always rendered but maybe renders different things depending on if someone is
//logged in as a customer or later on store
class App extends Component {

  state = {
    stores: [],
  }

  // Get all stores
  fetchStores(){
    fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then(json => this.setState({stores: json}))
  }

  componentDidMount(){
    this.fetchStores()
  }

  render() {
    return (
      <div className="App">

          < NavBar />
          {/* need to break because they keep overlapping */}
          <br/>
          <br/>
          <br />
          {/* for now default will be storepage */}
          < StorePage stores={this.state.stores}/>

      </div>
    );
  }
}

export default App;
