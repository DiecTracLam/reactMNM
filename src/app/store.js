import { configureStore } from '@reduxjs/toolkit'
import cartRedux from '../Features/Cart/cartRedux'
import userRedux from '../Features/User/userRedux'

export default configureStore({
  reducer: {
    user : userRedux,
    cart : cartRedux,
  }
})