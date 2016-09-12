import React, { Component, PropTypes } from 'react';

export default class Card extends Component {

  render() {
    const status = this.props.type;
    return (
      <div className={"panel card panel-" + status}>
        <div className="panel-heading">Тип: {status} {this.props.number} </div>
        <div className="panel-body">
        <div>Сообщение: Lorem ipsum</div>
        <div>Время: {new Date().toString()}</div>
        <div>Источник: Сервер</div>
        </div>
      </div>
    );
  }
}
