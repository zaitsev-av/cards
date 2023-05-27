import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "features/auth/auth.api";

const register = createAsyncThunk( 'auth/register', ( arg, thunkAPI ) => {
	const { dispatch, rejectWithValue } = thunkAPI
	authApi.register()
		.then( res => {
			debugger
		} )
} )


const slice = createSlice( {
	name: 'auth',
	initialState: {},
	reducers: {}
} )

export const authReducer = slice.reducer
export const authThunks = { register }