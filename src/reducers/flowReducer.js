const INITIAL_STATE = {
    project: null,
    style: null,
    email: null,
    description: null,
    price: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "PROJECT_SELECTED":
            return {...state, project: action.payload.name, price: action.payload.price}
        case "STYLE_SELECTED":
            return {...state, style: action.payload}
        case "ORDER_SUBMITTED":
            return {...state, email: action.payload.email, description: action.payload.description}
        default:
            return state;
    }

}