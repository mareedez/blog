import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        searchInput: "",
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const {
    setSignedIn,
    setInput,
    setBlogData,
    setUserData,
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;