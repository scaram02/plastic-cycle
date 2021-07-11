
const reducer = (state = {plastic: []}, action) => {
    switch(action.type){
        case "addPlastic":
            return {plastic: [...state.plastic, action.payload]};
        case "removePlastic":
            return {plastic: state.plastic.filter((plastic) => plastic !== action.payload)}
        case "editPlastic":
            return {plastic: state.plastic.map((p) => p.id === action.payload.id? action.payload : p)}
        default: 
            return state
    }
}

export default reducer