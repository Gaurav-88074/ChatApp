import {configureStore} from '@reduxjs/toolkit';

import messageSlice from './MessageSlice';
import authSlice from './AuthSlice';
// import batchInfoSlice from './BatchSlice';
const store = configureStore({
    reducer:{
        // "batchInfoReducer":batchInfoSlice.reducer,
        "messageSliceReducer"    :messageSlice.reducer,
        "authSliceReducer"       :authSlice.reducer,
    },
});
export default store;