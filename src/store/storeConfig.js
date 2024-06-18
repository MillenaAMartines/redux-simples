import { createStore, combineReducers } from "redux"
import numerosReducer from './reducers/numeros'

// não se utiliza mais esse createStore, entretanto vou manter para não impactar no projeto 

const reducers = combineReducers({
    numeros: numerosReducer,
}
)

function storeConfing() {
    return createStore(reducers)
}

export default storeConfing