import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching:false,
        error:false,
    },
    //states ko change krne liye reducers mai function create kre hai 
    reducers: {
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser = action.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error = true
        },
    },
});

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;