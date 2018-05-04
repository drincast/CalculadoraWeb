import React, { Component } from 'react';

import './boton.css';

class Boton extends Component {
  ImprimirValor(){
    //return (this.props.valor);
    //console.log(this.props.valor);
    this.props.MePresiono;
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
