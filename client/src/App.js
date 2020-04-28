import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import './style.css';
import Postage from "./components/postage/postage";


export default class App extends Component {
    render() {
        return (
            
            <div>
               <Navbar />
               <Postage />
              
            </div>
        )
    }
}
