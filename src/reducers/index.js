import { combineReducers } from 'redux';
import photosReducer from'./photos-reducer';

const rootReducer = combineReducers({
    photos: photosReducer
});

export default rootReducer;