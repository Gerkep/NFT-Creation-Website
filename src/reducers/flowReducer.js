const INITIAL_STATE = {
    project: null,
    style: null,
    email: null,
    description: null,
    image: null,
    paid: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "PROJECT_SELECTED":
            return {...state, project: action.payload}
        case "STYLE_SELECTED":
            return {...state, style: action.payload}
        case "ORDER_SUBMITTED":
            return {...state, email: action.payload.email, description: action.payload.description, image: action.payload.imageToUpload.preview}
        default:
            return state;
    }

}