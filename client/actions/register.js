import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerUserRequest ({username, password}) {
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        username, password
      })
      .end((err, res) => {
        if (err) {
          alert("didn't work")
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
