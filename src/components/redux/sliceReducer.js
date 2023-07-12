import { createSlice } from "@reduxjs/toolkit";
export const sliceReducer = createSlice({
    name: "task",
    initialState: {
        values: [],

    },
    reducers: {
        updateForm: (state, action) => {
            state.values = [...state.values, action.payload]
        },


    }
})

export const task2Slice = createSlice({
    name: 'task2',
    initialState: {
        formdata: []
    },
    reducers: {
        task2bForm: (state, action) => {
            state.formdata = [...state.formdata, action.payload]
        }
    }
})

export const task3Slice = createSlice({
    name: "task3",
    initialState: {
        task3: []
    },
    reducers: {
        task3Form: (state, action) => {
            state.task3 = [...state.task3, action.payload]
        }
    }
})

export const task4Slice = createSlice({
    name: "task4",
    initialState: {
        task4: {
            box1: 0,
            box2: 0
        }
    },
    reducers: {
        task4Form: (state, action) => {
            state.task4 = {...state.task4,...action.payload}

        }
    }
})

export const { updateForm } = sliceReducer.actions
export const { task2bForm } = task2Slice.actions
export const { task3Form } = task3Slice.actions
export const { task4Form } = task4Slice.actions

export default sliceReducer




