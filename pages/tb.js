import React, { Component, useEffect } from "react";
import { kdata } from "./tabledata";


export default class HoroscopeReport extends React.Component {
 constructor() {
    super();
      this.fetchh();  
     
  
      this.state = {
      tbb:[]  
      
       
      };
    }
  
   
  async fetchh() {
    
    const axios = require('axios').default;
    try {
      const response = await axios.get('https://gateway.moralisipfs.com/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE')
      console.log(response.data);
 
 
  this.setState({ tbb: this.gedeta(response.data) }, () => {
    console.log(this.state.tbb);
  }); 
     
    
      // get table heading data
     
    } catch (error) {
      console.error(error);
    }    
  }
   gedeta(kdata){
    let details=[]
      for (const property in kdata) {
        details.push(
          <tr>
            <td>
              
            {property}</td>
            <td> {kdata[property]}</td>
          </tr>
        );}
        
  return details
  }
    
  
    render() {
  
      return (
        <div className="HoroscopeReport">
 
                <h2>Output:-</h2>

<table border={2} cellPadding={5}>
              
              <tbody>
              {this.state.tbb}
              </tbody>
            </table>
        </div>
      );
    }
  }