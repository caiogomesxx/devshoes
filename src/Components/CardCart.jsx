import "../Styles/cardCart.scss";
import img from "../images/atletico.jpg";
import {BiTrash} from  'react-icons/bi';
import api from "../services/api";
import { useEffect, useState } from "react";

export default function CardCart (props) {
    const [produto,setProduto] = useState([]);
    const idProduto = props.codigo;
    useEffect(() => {
        api.get(`/api/v1/produtos/getproduto/${idProduto}`).then(({data}) => {
            setProduto(data);
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function RemoverDoCarrinho(e){
        e.preventDefault();
        props.removeCart(idProduto);
    }
    //const price = produto.preco
    if(props.codigo> 0){
        return(
            <div className="card-cart" key={produto.produtoId}>
                <img src={produto.imagemUrl} alt="" />
                <div className="card-text">
                <h1>{produto.nome}</h1> 
                <h1>{produto.preco != null ? produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : ""}</h1>
                </div>
                <h1 className="delete" onClick={RemoverDoCarrinho}><BiTrash/></h1>
            </div>
        )
    }
    else return <h1>Sem produtos no carrinho...</h1>
}