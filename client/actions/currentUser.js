export const UPDATE_USER = 'UPDATE_USER'

import {fetchCurrentUser} from '../apiClient'

export const updateUser = (newUser) => {
  return {
    type: UPDATE_USER,
    newUser
  }
}

export function updateUserApi () {
  
}