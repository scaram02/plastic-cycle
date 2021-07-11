// put the add and edit and delet efunctions here

export const addPlastic = plastic => {
    return dispatch => {
        dispatch({
            type: "addPlastic",
            payload: plastic
        })
    }
}

export const editPlastic = plastic => {
    return dispatch => {
        dispatch({
            type: "editPlastic",
            payload: plastic
        })
    }
}

export const removePlastic = plastic => {
    return dispatch => {
        dispatch({
            type: "removePlastic",
            payload: plastic
        })
    }
}