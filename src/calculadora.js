import React, { Component } from 'react';

import PantallaResultado from './componentes/pantalla/pantallaresultado';
import Boton from './componentes/boton/boton';

class Calculadora extends Component {
  Resultado(obj){
    console.log(2);
    console.log(obj);
  }

  render() {
    return(
      <div>
        <PantallaResultado></PantallaResultado>
        <Boton valor='1' tipo='numero' MePresiono={this.Resultado.bind(this, this)}></Boton>
      </div>
    )
  }
}

export default Calculadora;
