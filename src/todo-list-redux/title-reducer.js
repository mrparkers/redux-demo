
const getInitialState = () => ({
    text: 'Todo List (Redux foo)',
    isTextbox: false
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case 'TOGGLE_TEXTBOX':
            return Object.assign({}, state, {
                isTextbox: !state.isTextbox
            });
        case 'SET_TEXT':
            return {
                text: action.value,
                isTextbox: false
            };
        default: return state;
    }
}