import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'


const Soma = props => {
    const { min, max } = props
    return (
        <Card title="Soma dos Numero" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}


export default connect(mapStateToProps)(Soma)