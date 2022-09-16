import img from "../images/atletico.jpg";
import { useState,useEffect } from "react";
import "../Styles/card.scss"
export default function Card(props) {
    function salvarNoCarrinho(e){
        e.preventDefault();
        props.saveCart(props.codigo)
    }
    var price = props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return(
        
        <div className="card" key={props.key}>
            <img src={props.image} alt="Card" />
            <h1>{props.name}</h1>
            <h2>{price}</h2>
            <button onClick={salvarNoCarrinho} >Saiba mais</button>
        </div>
    );
}