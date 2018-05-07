import React, { Component } from 'react';

import './boton.css';

class Boton extends Component {
  ImprimirValor(){
    //pasamos por parametro a la función "bindeada" al atributo MePresiono, declarado en el componente
    //donde llamamos al componente boton, estos parametros quedan despues de los parametros enviados
    //a la funcion que enlaza el atributo
    this.props.MePresiono(this.props.valor, this.props.tipo);
  }

  render(){
    return(
      <div className='boton' valor={ this.props.valor } tipo={ this.props.tipo } onClick={this.ImprimirValor.bind(this)}>
        { this.props.valor }
      </div>
    )
  }
}

// <div className='boton' valor={ this.props.valor } tipo={ this.props.tipo } onClick={this.props.MePresiono}>
//   { this.props.valor }
// </div>


export default Boton;
