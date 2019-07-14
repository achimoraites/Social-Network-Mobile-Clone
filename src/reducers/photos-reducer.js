const initialState = [];

export default function (state = [], action) {
    // console.log('ACTION', action);
    switch(action.type) {

        case 'GET_PHOTOS': 
            return action.payload;
        default:
            return state;
    }
}
