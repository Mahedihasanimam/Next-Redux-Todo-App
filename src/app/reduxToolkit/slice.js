const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
    employe:[]
}

const Slice=createSlice({
    name:'addEmployeSlicer',
    initialState,
    reducers:{
        addEmploye:(state,action)=>{
          
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.employe.push(data)
        },
        removeEmploye:(state,action)=>{
            console.log(state);
        }
    }
})
 export const {addEmploye,removeEmploye} = Slice.actions
 export default Slice.reducer