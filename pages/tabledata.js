// const TableData =  fetch(`https://ipfs.moralis.io:2053/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE`);
import React, { Component } from "react";


export default class App extends Component {
  constructor() {
 
    super();
    
    this.state = {
      data: ""
    };
  }
  async componentDidMount() {
    const axios = require('axios').default;
      try {
        const response = await axios.get('https://gateway.moralisipfs.com/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE')
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    
  
   
  
  }

  render() {
    return (
      <div className="App">
        <p> Below there should be some lorem ipsum text: </p>
       
      </div>
    );
  }
}
