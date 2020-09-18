import React, {Component} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import QuoteCard from './component/QuoteCard';
import "./App.css"

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      en:"",
      author:"",
      isLoading:true
    }
  }
  getQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(res => res.json())
    .then(({en, author}) => this.setState({en,author,isLoading:false}))
  }
  componentDidMount(){
    this.getQuote();
  }

  render(){
    const {en, author,isLoading} = this.state;
    return (
      <div className="app">
      {
      isLoading ? 
      <ClipLoader
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        /> :
      <QuoteCard text={en} author={author} getQuote={this.getQuote}/>
      }
      </div>
    )
  }
}