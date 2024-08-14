const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  employe: JSON.parse(localStorage.getItem("employe")),
};

export const fetchApiData= createAsyncThunk('fetchApiData',async()=>{
    console.log('action');
    const result=await fetch('https://jsonplaceholder.typicode.com/posts')
    return result.json();
});



const Slice = createSlice({
  name: "addEmployeSlicer",
  initialState,
  reducers: {
    addEmploye: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employe.push(data);
      localStorage.setItem("employe", JSON.stringify(current(state.employe)));
      console.log(current(state.employe));
    },
    removeEmploye: (state, action) => {
      const updatedEmploye = state.employe.filter(
        (item) => item.id !== action.payload
      );
      state.employe = updatedEmploye;
      localStorage.setItem("employe", JSON.stringify(updatedEmploye));
    },
  },
  extraReducers:(builder)=>{

    builder.addCase(fetchApiData.fulfilled,(state,action)=>{
     
        state.isloading=false,
        state.fetchApiData=action.payload
    })
  }
});
export const { addEmploye, removeEmploye } = Slice.actions;
export default Slice.reducer;
