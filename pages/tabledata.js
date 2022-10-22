// const TableData =  fetch(`https://ipfs.moralis.io:2053/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE`);
import { ClassNames } from "@emotion/react";
import React, { Component } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
export default class App extends Component {
  constructor() {
    
    super();
    
    this.state = {
   isDisabled: true,
      datatb:"",
      dt:[]
    };
  }
  
  async componentDidMount() {
    const db = getFirestore(app);
    var datex;
    const q = query(collection(db, "users"), where("phone", "==", "7394812444"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
 
    datex=doc.data()
this.state.dt.push(datex);
    console.log(datex);
    });
    // this.setState({ datatb:this.gedeta(datex) }, () => {
        
    //   console.log(this.state.dt);
    // }); 
  //   const axios = require('axios').default;
  //     try {
  //       const response = await axios.get('https://gateway.moralisipfs.com/ipfs/QmNbQfmG5iqnzVdGN6fRAKPaY6Gn9nVe8LunAmXH6P9tzE')
  //       console.log(response.data);
  //  const kdata= response.data;
   
  //         return(kdata)
        
  //       // get table heading data
       
  //     } catch (error) {
  //       console.error(error);
  //     }
    
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
  
 render(){
  return (
    <div className="HoroscopeReport">

            <h2>Output:-</h2>

<table border={2} cellPadding={5}>
          
          <tbody>
          {this.state.datatb}
          </tbody>
        </table>
    </div>
  );
  
 }
  
}
