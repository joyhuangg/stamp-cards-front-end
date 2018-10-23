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
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} placeholder="Search for Places"/>
    )
  }
}

export default Filter;
