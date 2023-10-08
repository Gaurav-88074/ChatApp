import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    messagesArray : [],
}
const messageSlice = createSlice({
    name : 'messageSlice',
    initialState:initialState,
    reducers : {

        insertMessages(state,action){
            // console.log(action.payload);
            state.messagesArray =  [...action.payload,...state.messagesArray];
            state.messagesArray.reverse();
        },
        insertMessage(state,action){
            // console.log(action.payload);
            state.messagesArray =  [action.payload,...state.messagesArray];
        },
    }
});
export default messageSlice;
export const messageSliceActions = messageSlice.actions;