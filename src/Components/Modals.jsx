import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import api from '../services/api';
import "../Styles/modal.scss";
import { FormEvent } from 'react'
export default function Modals(props){
  const [Nome,setNome] = useState("");
  const [ImagemUrl,setImagemUrl] = useState("");
  const [price,setPrice] = useState("");
  const [Descricao,setDescricao] = useState("");


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
  async function SaveProduct( FormEvent){
     FormEvent.preventDefault();
     const data = {
      Nome,
      Descricao,
      ImagemUrl
   }
      await api.post("/api/v1/produtos/inserirproduto",data) 
  }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps

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
         
        <form className="form-modal" onSubmit={SaveProduct}>
          <input type="text" className="input-modal" placeholder='Nome' onChange={(e) => setNome(e.target.value)} required/>
          <input type="text" className="input-modal" placeholder='Imagem Url' onChange={(e) => setImagemUrl(e.target.value)} required/>
          <input type="text" className="input-modal" placeholder='Preço R$'onChange={(e) => setPrice(e.target.value)} required/>
          <input type="text" className="input-modal" placeholder='Descrição' onChange={(e) => setDescricao(e.target.value)} required/>
          <select name="select" className="input-modal" placeholder='Categoria' >
  <option value="valor1">Categoria</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
      </select>
      <div className='buttons'>
          <button className="btns save"  >Salvar</button>
          <button className="btns cancel" onClick={props.onRequestClose}>Cancelar</button>
        </div>
        </form>
        
    </div>
      </Modal>
  )
}