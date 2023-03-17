const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10
}

// state can be directly mutated because react toolkit user immer under the hood
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;