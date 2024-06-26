import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'


const Sorteio = props => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio dos Numero" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>

    )
}
function mapSateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapSateToProps)(Sorteio)