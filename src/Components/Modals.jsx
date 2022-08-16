import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "../Styles/modal.scss";
export default function Modals(props){
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(60, 60, 60, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '40rem',
      width: '60rem',
       
      
    },
     
  };
  return(

    <Modal
    isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
    >
    <div className='header-modal'>
        
        <button  onClick={props.onRequestClose}className="btn">x</button>
    </div>
    <div className='main-modal'>
    <h1>adicionar novo produto</h1>
         
        <form className="form-modal">
          <input type="text" className="input-modal" placeholder='Nome'/>
          <input type="text" className="input-modal" placeholder='Imagem Url'/>
          <input type="text" className="input-modal" placeholder='Preço R$'/>
          <input type="text" className="input-modal" placeholder='Descrição'/>
          <select name="select" className="input-modal" placeholder='Categoria'>
  <option value="valor1">Categoria</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
      </select>
      <div className='buttons'>
          <button className="btns save">Salvar</button>
          <button className="btns cancel" onClick={props.onRequestClose}>Cancelar</button>
        </div>
        </form>
        
    </div>
      </Modal>
  )
}