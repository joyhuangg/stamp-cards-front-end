import React, {Component} from 'react'
import _ from 'lodash'
import faker from 'faker'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

class Filter extends Component {

  handleSearch = (e, {value}) => {
    this.props.handleSearch(e, value)
  }


  render() {
    return (

      <div className="search">
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
      </div>

    )
  }
}

export default Filter;
