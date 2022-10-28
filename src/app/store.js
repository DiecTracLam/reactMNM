import { configureStore } from '@reduxjs/toolkit'
import userRedux from '../Features/User/userRedux'

export default configureStore({
  reducer: {
    user : userRedux,
  }
})