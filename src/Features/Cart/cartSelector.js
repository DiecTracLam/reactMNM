import {createSelector} from '@reduxjs/toolkit'

const cartItemSelector = (state) => state.cart.cart

// count number of products in cart
export const cartItemsCountSelector= createSelector(
    cartItemSelector,
    cart => cart.reduce((count,item)=> count + Number(item.quantity) ,0)
)

//caculate total of cart 
export const cartTotalSelector = createSelector(
    cartItemSelector,
    cart => cart.reduce((total,item)=> total + Number(item.quantity * item.priceAfter),0)
)