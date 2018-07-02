import React from 'react'

class Image extends React.Component {
    constructor(props){
        super(props);
    }

    calculaPosicaoX() {
        return `${this.props.eixoX * this.props.width * (-1)}px`;
    }

    calculaPosicaoY() {
        return `${this.props.eixoY * this.props.height * (-1)}px`;
    }

    calcularTamanho() {
        return `auto ${this.props.backgroundHeight}px`
    }

    obterEstilo() {
        return {
            backgroundImage: `url(${this.props.arquivo})`,
            backgroundPositionX: this.calculaPosicaoX(),
            backgroundPositionY: this.calculaPosicaoY(),
            backgroundSize: this.calcularTamanho(),
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            display: 'table',
            margin: '0 auto'
        }
    }

    render() {
        return (
            <div style={this.obterEstilo()}>
            </div>
        )
    }
}

export default Image;