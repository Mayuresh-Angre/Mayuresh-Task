import { configureStore } from "@reduxjs/toolkit";
import sliceReducer, { task2Slice, task3Slice, task4Slice } from "./sliceReducer";



export const sliceStore=configureStore({
    reducer:{
        task:sliceReducer.reducer,
        task2:task2Slice.reducer,
        task3:task3Slice.reducer,
        task4:task4Slice.reducer
    }
})