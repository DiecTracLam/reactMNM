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
            console.log(newItem)
            console.log(ItemIndex)
            if(ItemIndex >=0){
                state.cart[ItemIndex].quantity += newItem.quantity
            }
            else{
                state.cart.push(newItem)
            }
        },
        setQuantity(state,action){
            const {id , quantity} = action.payload
            console.log(action.payload);
            const ItemIndex = state.cart.findIndex(x => x.id == id)
            if(ItemIndex>=0){
                state.cart[ItemIndex].quantity = quantity
            }
        },
        removeItem(state,action){
            const id = action.payload
            console.log(id)
            state.cart=state.cart.filter(x => x.id != id)
        },
        removeAllItem(state){
            state.cart = []
        }
    },
})

export const {addToCart , setQuantity,removeItem , removeAllItem} = cartSlice.actions;
export default cartSlice.reducer