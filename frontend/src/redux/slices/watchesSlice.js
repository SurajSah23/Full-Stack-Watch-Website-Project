// watchesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watches: [],
  selectedCategory: null,
  loading: false,
  error: null,
};

const watchesSlice = createSlice({
  name: 'watches',
  initialState,
  reducers: {
    setWatches: (state, action) => {
      state.watches = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setWatches, setSelectedCategory, setLoading, setError } = watchesSlice.actions;
export default watchesSlice.reducer;