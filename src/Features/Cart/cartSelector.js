import {createSelector} from '@reduxjs/toolkit'

const cartItemSelector = (state) => state.cart.cart

// count number of products in cart
export const cartItemsCountSelector= createSelector(
    cartItemSelector,
    cart => cart.reduce((count,item)=> count + item.quantity ,0)
)

//caculate total of cart 
export const cartTotalSelector = createSelector(
    cartItemSelector,
    cart => cart.reduce((total,item)=> total + (item.quantity * item.product.salePrice))
)