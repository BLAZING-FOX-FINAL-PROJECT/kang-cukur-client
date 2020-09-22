import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  // access_token = '',
  // userType = '',
  // customer = {},
  // kangCukur = {}
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    // case 'SET_ACCESS_TOKEN':
    //   return { ...accessToken, access_token: action.payload.access_token }
    default:
      return state
  }
}

const store = createStore(reducers, applyMiddleware(thunk))

export default store