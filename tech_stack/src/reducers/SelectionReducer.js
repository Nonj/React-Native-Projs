

//state = null means that if state is undefined, make it "null"

export default (state = null, action) => {
    switch(action.type) {
        case 'select_library':
            return action.payload;

        default:
            return state;
    }
};