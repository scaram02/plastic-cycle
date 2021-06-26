// put the add and edit and delet efunctions here

export const addPlastic = plastic => {
    return dispatch => {
        dispatch({
            type: "addPlastic",
            payload: plastic
        })
    }
}