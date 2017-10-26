import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerUserRequest ({name, username, password}) {
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        name, username, password
      })
      .end((err, res) => {
        if (err) {
          // ale
          console.log(err)
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
