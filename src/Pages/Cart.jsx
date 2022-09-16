import CardCart from "../Components/CardCart";
import Header from "../Components/Header";

import "../global.scss";
import "../Styles/cart.scss";
export default function Cart() {
        const prod = (localStorage.getItem("carrinho"));
        var produtos =(prod.split(','));
        produtos = produtos.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        function RemoveItemCart(idProduct){
           for(var i = 0; i < produtos.length; i++){
            if(produtos[i] == idProduct){
                produtos.splice(i, 1) ;
            localStorage.setItem("carrinho",produtos);
            }
           }
        }
    return (
        <>
        <Header/>
        <div className="main">
        <h1>Carrinho</h1>
        {produtos!= null?
produtos.map((produto ) => <CardCart
key={produto}
codigo={produto}
removeCart={RemoveItemCart}/>) : ""}
        </div>
        </>
    )
}