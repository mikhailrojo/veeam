import React, { Component } from 'react';
import CardList from './CardList';

import Filters from './Filters.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: "all"
    }
  }

  typeFilter(e){
    console.log(e);
    this.setState({
      visibility: e
    })
  }
  render() {
    return (
      <div>
        <Filters type={this.typeFilter.bind(this)}/>
        <CardList showOnly={this.state.visibility}/>
      </div>
    );
  }
}
