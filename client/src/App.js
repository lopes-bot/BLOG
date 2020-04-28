import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import './style.css';
import Postage from "./components/postage/postage";
import axios from 'axios';


export default class App extends Component {
    
    constructor(props){
        super(props)

        axios.get('/postage/list').then(resultado=>{
           console.log(resultado);
        })
    }

    render() {
        return (
            
            <div>
               <Navbar />
               <Postage />
              
            </div>
        )
    }
}
