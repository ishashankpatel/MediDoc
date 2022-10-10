// const TableData =  fetch(`https://ipfs.moralis.io:2053/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE`);
import { ClassNames } from "@emotion/react";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
 
    super();
    
    this.state = {
   isDisabled: true,
      dtd: ""
    };
  }
  async componentDidMount() {
    const axios = require('axios').default;
      try {
        const response = await axios.get('https://gateway.moralisipfs.com/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE')
        console.log(response.data);
   const kdata= response.data;
   
          return(kdata)
        
        // get table heading data
       
      } catch (error) {
        console.error(error);
      }
    
  

  
  }
  
 render(){
  return (
    <div>

            <h2>Output:-</h2>
            <table border={2} cellPadding={5}>
              <thead>
                <tr>
                  <td>Key</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
              <a href="/tb">
                <button>
  Verified
</button></a>
              </tbody>
            </table>
    </div>
  );
 }
  
}
