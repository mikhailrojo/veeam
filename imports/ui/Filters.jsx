import React, { Component } from 'react';

export default class Filter extends Component{

  render(){
    return(
      <div className="filters">
        <select onClick={(e)=>this.props.type(e.target.value)} defaultValue="type">
          <option disabled value="type">Тип</option>
          <option value="all">Без фильтра</option>
          <option value="danger">danger</option>
          <option value="warning">warning</option>
          <option value="success">success</option>
          <option value="info">info</option>
        </select>
      
      </div>
    )
  }
}
