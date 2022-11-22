import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";

export const login = createAsyncThunk('user/login',async (payload)=>{
    const response = await userApi.login(payload);
    return response.data[0].user;
})

export const register = createAsyncThunk('user/register',async (payload)=>{
    const response = await userApi.register(payload)
    return response.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{}
    },
    reducers:{
        Update:(state,payload)=>{
            state.user = payload.user;
        },
        Logout: state =>{
            state.user = {}
        }
    },
    extraReducers : {
        [login.fulfilled] : (state,action) =>{
            state.user = action.payload;
        },
        [register.fulfilled] : (state,action) =>{
            state.user = action.payload;
        },
        
    }
})

export const {Logout} = userSlice.actions;
export default userSlice.reducer