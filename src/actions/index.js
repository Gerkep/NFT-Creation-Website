import history from "../history";

export const selectProject = project => (dispatch, getState) => {
    dispatch({type: 'PROJECT_SELECTED', payload: project});
    history.push('/project/style');
};

export const selectStyle = (style) => (dispatch, getState)  => {
        dispatch({type: 'STYLE_SELECTED', payload: style});
        history.push('/project/description');
};

export const submitOrder = (formValues) => (dispatch, getState) => {
    dispatch({type: 'ORDER_SUBMITTED', payload: formValues});
    history.push('/project/summary');
}
