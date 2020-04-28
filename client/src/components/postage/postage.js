import React, { Component } from 'react';
import './postage.css';
import axios from 'axios';



export default class postage extends Component {

    state ={
        postage:[]
    }
   
    constructor(props){
        super(props)

        axios.get('/postage/list').then(res=>{
            const postage = res.data
            this.setState({
                postage
            })
           
           
        })
    }
   
    render() {
       
        return (
            <div>
                {this.state.postage.map(post =>(
                    <div className="card">
                          <h3>Titulo: {post.title}</h3>
                          <hr></hr>
                          <p>Descrição{post.description}</p>
                          <small>Autor:{post.author}</small>
                          <small>Data:{post.date}</small>
                          <hr></hr>
                          <div className="success"> 
                          <button >Editar</button>
                          <button >Deletar</button>
                          </div>
                          
                    </div>
                          
                          
                 ))}
            </div>
        )
    }
}
