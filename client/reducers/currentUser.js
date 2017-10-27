import {UPDATE_USER} from '../action/currentUser'

import {getUserTokenInfo} from '../utils/auth'

const currentUser = (state = getUserTokenInfo(), action) => {
  switch (action.type) {
    case UPDATE_USER:
      return getUserTokenInfo()
    default:
      return state
  }
}

export default currentUser