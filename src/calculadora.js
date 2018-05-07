import React, { Component } from 'react';

import PantallaResultado from './componentes/pantalla/pantallaresultado';
import Boton from './componentes/boton/boton';

//var lstOpe = ['+', '-', '*', '/'];

class Calculadora extends Component {
  constructor(){
    super();

    this.state = {
      resultado: 0,
      acumulado: 0,
      pantalla: '0',
      tipoAnterior: 'n',
      operacionAnterior: '',
    };

    this.ImprimirEstadoLog();
  }

  Procesar(valor, tipo){
    switch (tipo) {
      case 'n':
        this.ProcesarValor(valor);
        break;
      case 'o':
        this.EjecutarOperacion(valor);
        break;
      default:
    }

    this.setState({tipoAnterior: tipo});
    this.ImprimirEstadoLog();
  }

  ProcesarValor(valor){
    if(this.state.pantalla !== '0'){
      this.setState({pantalla: this.state.pantalla + valor});
    }
    else{
      this.setState({pantalla: valor});
    }
  }

  EjecutarOperacion(valor){
    let ejecutarAnterior = false;
    if(this.state.acumulado === 0){
      this.setState({acumulado: parseFloat(this.state.pantalla)});
      this.setState({pantalla: '0'});
      this.setState({operacionAnterior: valor});
    }
    else{
      if(this.state.operacionAnterior !== ''){
        ejecutarAnterior = true;

        switch (this.state.operacionAnterior) {
          case '+':
            console.log('sumando');
            this.setState({resultado: this.state.acumulado + parseFloat(this.state.pantalla)});
            this.setState({operacionAnterior: valor});
            this.setState({pantalla: this.state.resultado.toString()});
            //this.setState({acumulado: 0});
            this.ImprimirEstadoLog();
            break;
          case '-':
            break;
          case '*':
            break;
          case '/':
            break;
          default:
        }
      }
      else{
        this.setState({operacionAnterior: valor});
      }




    }
  }

  ImprimirEstadoLog(){
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <PantallaResultado resultado={this.state.pantalla}></PantallaResultado>
        <Boton valor='1' tipo='n' MePresiono={this.Procesar.bind(this)}></Boton>
        <Boton valor='2' tipo='n' MePresiono={this.Procesar.bind(this)}></Boton>
        <Boton valor='3' tipo='n' MePresiono={this.Procesar.bind(this)}></Boton>
        <Boton valor='+' tipo='o' MePresiono={this.Procesar.bind(this)}></Boton>
        <Boton valor='4' tipo='n' MePresiono={this.Procesar.bind(this)}></Boton>
      </div>
    )
  }
}

export default Calculadora;
