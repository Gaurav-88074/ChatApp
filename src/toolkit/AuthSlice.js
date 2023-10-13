import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loadingState : true,
    user : null,
}
const authSlice = createSlice({
    name : 'authSlice',
    initialState:initialState,
    reducers : {

        setUser(state,action){
            // console.log(action.payload);
            state.user =  action.payload;
        },
        deleteUser(state,action){
            // console.log(action.payload);
            state.user =  null;
        },
        // insertMessage(state,action){
        //     // console.log(action.payload);
        //     state.messagesArray =  [action.payload,...state.messagesArray];
        // },
    }
});
export default authSlice;
export const authSliceActions = authSlice.actions;