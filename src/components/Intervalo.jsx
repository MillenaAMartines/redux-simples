import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/numeros'
import { alterarNumeroMaximo } from '../store/actions/numeros'


const Intervalo = props => {
    const { min, max } = props;
    return (
        <Card title="Intervalo de Numero" red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>

    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    };
}

function mapDispatchTopProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // action creator ->retorn -> action 
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            // action creator ->retorn -> action 
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps
)(Intervalo); 