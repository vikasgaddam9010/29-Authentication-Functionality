import Coockies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {

  const onClickToSubmit = async () => {    
    const url = "https://apis.ccbp.in/login"
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }

    const data = await fetch (url, options)
    const jwtToken = await data.json()

    if (data.ok === true){
      const {history} = props
      Coockies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    }
  }
  const token = Coockies.get('jwt_token')
  console.log(token)
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="d-flex">
      <h1>Please Login</h1>
      <button onClick={onClickToSubmit}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
