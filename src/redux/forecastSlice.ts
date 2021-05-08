import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'forecast',
  initialState: {
    city: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    }
  },
});

export const { setCity } = slice.actions;

export const selectCity = (state: any) => state.city;

export default slice.reducer;
