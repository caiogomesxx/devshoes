import "../global.scss";
import "../Styles/header.scss";
import {CgShoppingCart} from  'react-icons/cg';
import {BiUserCircle} from  'react-icons/bi';
import {Link} from "react-router-dom";
import {IoMdAdd} from  'react-icons/io';
import React from 'react';
import ReactDOM from 'react-dom';
import Modals from "./Modals";

export default function Header () 
{
   
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
        
        <>
        
        <nav>
            <div>
            <Link to="/">
            <h1>DEV SHOES</h1>
            </Link>
            </div>  
            <div className="icons">
            <Link to="/carrinho">
            <h1>
            <CgShoppingCart />
            </h1>
            </Link>
            <h1>
            <BiUserCircle />
            </h1>
             <button onClick={openModal}>
             <h1>
                <IoMdAdd  />
                </h1>
             </button>
            </div>
        </nav>
        <div>
      <Modals
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      />
     
    </div>
        </>
    );
}