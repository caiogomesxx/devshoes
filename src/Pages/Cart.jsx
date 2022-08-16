import CardCart from "../Components/CardCart";
import Header from "../Components/Header";
import "../global.scss";
import "../Styles/cart.scss";
export default function Cart() {
    return (
        <>
        <Header/>
        <div className="main">
        <h1>Carrinho</h1>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        </div>
        </>
    )
}