import { createSlice } from "@reduxjs/toolkit";

type SubProject={
    isAdd:boolean;
    isEdit:boolean;
    isEditUpdate:boolean;
    
}


const initialState:SubProject={
    isAdd:false,
    isEdit:false,
    isEditUpdate:false,
}



export const subProjectSlice = createSlice({
    name:"subproject",
    initialState,
    reducers:{
        toggleSubProject:(state)=>{
            state.isAdd=!state.isAdd;
        },
        toggleEditSubProject:(state)=>{
            state.isEdit=!state.isEdit;
        },
        toggleEditUpdateSubProject:(state)=>{
            state.isEditUpdate=!state.isEditUpdate;
        },
    }
})


export const { toggleSubProject, toggleEditSubProject, toggleEditUpdateSubProject } = subProjectSlice.actions

export const SubProjectReducer= subProjectSlice.reducer