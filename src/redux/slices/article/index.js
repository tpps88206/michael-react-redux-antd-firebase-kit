import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    // TODO: Modify reducers
    initialize: (state, action) => {
      return initialState;
    },
  },
});

export const { initialize } = slice.actions;

export default slice.reducer;
