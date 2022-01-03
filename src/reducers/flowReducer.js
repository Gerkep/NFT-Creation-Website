const INITIAL_STATE = {
    project: null,
    style: null,
    paid: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "PROJECT_SELECTED":
            return {...state, project: action.payload}
        case "STYLE_SELECTED":
            return {...state, style: action.payload}
        default:
            return state;
    }

}