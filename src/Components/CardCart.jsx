import "../Styles/cardCart.scss";
import img from "../images/atletico.jpg";
import {BiTrash} from  'react-icons/bi';

export default function CardCart () {
    return(
        <div className="card-cart">
            <img src={img} alt="" />
            <div className="card-text">
            <h1>Camiseta Atlético Mg 22-23</h1>
            <h1>R$ 299,90</h1>
            </div>
            <h1 className="delete"><BiTrash/></h1>
        </div>
    )
}