import React, {Component} from 'react';
import Card from './Card.jsx';

let uniqueKey= 0;
let results = [];
function calculateWindow(){
  var clientHeight=document.documentElement.clientHeight; // видимая часть страницы
  var scrollTop=window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop;
  var totalHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight);
  return (totalHeight == scrollTop + clientHeight);
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export default class CardList extends Component{
  showMore(n){
      for (var i =0; i < n*5; i ++){
        results.push(<Card key={uniqueKey++} number={uniqueKey} type={this.renderColor()}/>);
      }
      this.setState({
        results
      })
  }
  componentWillMount(){
    const averageHeight = 153;
    this.firstLoad = Math.floor(window.innerHeight/averageHeight);
    this.setState({
      results: []
    })
    this.showMore(this.firstLoad);
  }
  componentDidMount(){
    //console.log(this.props.showOnly)
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
  }

  renderColor(){
    const types = ["primary", "success", "info", "warning", "danger"];
    const digit = Math.floor(randomNumber(0, types.length));
    return types[digit];
  }

  handleScroll(){
    if(calculateWindow()){
      this.showMore(this.firstLoad*2);
    }
  }

  filterResults(type){
    console.log(type);
    if(!type || type === "all"){
      return this.state.results.filter(e=> true);
    }else {
      return this.state.results.filter(e=> e.props.type === type);
    }
  }

  render(){
      // console.log(this.state.results.filter(e=>e.props.type=="info"));
      return(
      <div>{this.filterResults(this.props.showOnly)}</div>
      )

  }
}
