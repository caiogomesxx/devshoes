import img from "../images/atletico.jpg";
import "../Styles/card.scss"
export default function Card(props) {
    var price = props.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return(
        
        <div className="card" key={props.key}>
            <img src={props.image} alt="Card" />
            <h1>{props.name}</h1>
            <h2>{price}</h2>
            <button>Saiba mais</button>
        </div>
    );
}