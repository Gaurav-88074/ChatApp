import {configureStore} from '@reduxjs/toolkit';

import messageSlice from './MessageSlice';
// import batchInfoSlice from './BatchSlice';
const store = configureStore({
    reducer:{
        // "batchInfoReducer":batchInfoSlice.reducer,
        "messageSliceReducer"    :messageSlice.reducer,
    },
});
export default store;