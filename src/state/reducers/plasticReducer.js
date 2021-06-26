const blankPlastic = {id: null, plasticName: '', type: null, timeOfDay: ''} 

const reducer = (state = blankPlastic, action) => {
    switch(action.type){
        case "addPlastic":
            return {plastic: [...state.plastic, action.payload]};
        case "removePlastic":
            return {plastic: state.plastic.filter((plastic) => plastic !== action.payload)}
        default: 
            return state
    }
}

export default reducer