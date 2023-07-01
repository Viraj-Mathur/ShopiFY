import { createSlice } from "@reduxjs/toolkit"

// Creating a redux slice

// the slice syntax is a simple generic syntax
export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers: {
        add: (state,action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }

});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

/*
A typical Redux slice created with createSlice() consists of the following:

    Initial State: The initial value of the state managed by the slice.

    Reducers: A collection of reducer functions that define how the state should be updated in response to specific actions. 
    Each reducer is associated with an action and performs the necessary state modifications.

    Action Creators: Automatically generated functions that create actions corresponding to the reducers defined in the slice. 
    These action creators can be dispatched in the application to trigger the state updates.

By using Redux slices, you can modularize your state management and encapsulate related logic within specific slices, 
making it easier to maintain and reason about your application's state. 
Slices can be combined together to form the overall Redux store, providing a centralized and predictable state management solution.

*/
