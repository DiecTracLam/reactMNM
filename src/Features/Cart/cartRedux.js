import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const ItemIndex = state.cart.findIndex(item => item.id === newItem.id)
            if(ItemIndex >=0){
                state.cart[ItemIndex].quantity += newItem.quantity
            }
            else{
                state.cart.push(newItem)
            }
        },
        removeItem(state,action){
            const id = action.payload
            console.log(id)
            state.cart=state.cart.filter(x => x.id != id)
        }
    },
})

export const {addToCart , removeItem} = cartSlice.actions;
export default cartSlice.reducer