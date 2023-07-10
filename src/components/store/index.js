import { createSlice, configureStore } from "@reduxjs/toolkit";

const travelSlice = createSlice({
  name: "ADD_TRAVEL",
  initialState: {
    travelPlans: [],
  },
  reducers: {
    addTravel: (state, action) => {
      state.travelPlans.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    travel: travelSlice.reducer,
  },
});

export const AddTravel = travelSlice.actions;
// export default travelSlice.reducer;

export default store;
