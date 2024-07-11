import {configureStore} from '@reduxjs/toolkit'
import  useReducer  from "./store/Users.jsx"

export default configureStore ({
  reducer: {
    users: useReducer
  }
})