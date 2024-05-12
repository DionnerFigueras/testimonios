import React from 'react';
import '../styles/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'> 
      <img className='foto-perfil' src={require(`../images/Testimonio-${props.imagen}.jpg`)} alt='Foto-Perfil' title='Foto-Perfil' /> 
      <div className='contenedor-txt'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong>  en <strong>{props.pais}</strong>
        </p>
        <p className='cargo-empresa'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='contenido-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio; 