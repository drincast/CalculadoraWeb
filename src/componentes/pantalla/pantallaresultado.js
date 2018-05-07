import React, { Component } from 'react';

class PantallaResultado extends Component {
  constructor(){
    super();

    this.state = {
      resultado: 0
    };
  }

  componentDidMount () {
    // console.log(this.props.resultado);
    // if(Number.parseInt(this.props.resultado) === 1){
    //   this.props.resultado = 0;
    // }
    // console.log(this.props.resultado);
    //this.setState({resultado: this.props.resultado});
  }

  render() {
    return(
      <div>
        {this.props.resultado}
      </div>
    ) ;
  }
}

export default PantallaResultado;
