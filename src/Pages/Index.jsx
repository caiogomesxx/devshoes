import "../global.scss";
import "../Styles/home.scss"
import Header from '../Components/Header';
import Card from "../Components/Card";
import api from "../services/api";
import { useEffect, useState } from "react";
export default function Home() {
  
    const [cart,SetCart] = useState([]);
    const [produtos,SetProdutos] = useState([]);

    useEffect(() => {
        api.get("/api/v1/produtos/listarprodutos").then(({data}) => {
            SetProdutos(data);
        })
        console.log(produtos)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function SalvarNoCarrinho(idProduct) {
        
        SetCart([...cart,idProduct]);
        localStorage.setItem("carrinho",cart);
   }
    return(
        <>
        <Header />
        <div className="main">
        <div className="container">
        {produtos.map((produto ) => <Card key={produto.produtoId}
                                        codigo={produto.produtoId}
                                        name={produto.nome}
                                        price={produto.preco}
                                        image={produto.imagemUrl} 
                                        saveCart={SalvarNoCarrinho}  />)}
        
         
        </div>
        </div>
        </>
    )
}