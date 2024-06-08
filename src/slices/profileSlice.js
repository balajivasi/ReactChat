import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: 'BalajiVasi@gmail.com',
    language: 'en',
    firstName: 'Balaji',
    lastName: 'Vasi',
    token: null,
    globalError: "",
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileEmail: (state, action) => {
            state.email = action.payload
        },
        setProfileLanguage: (state, action) => {
            state.language = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setGlobalError: (state, action) => {
            state.globalError = action.payload;
        },
        setClearProfileData: (state) => {
            state.Token = null;
            state.email = null;
            state.lastName = null;
            state.firstName = null;
            state.globalError = null;
        }
    }
})
export const { setProfileEmail, setProfileLanguage, setFirstName, setLastName, setToken, setGlobalError, setClearProfileData } = profileSlice.actions;
export default profileSlice.reducer;