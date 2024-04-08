import Coockies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClickToDeleteToken = () => {
    const {history} = props
    Coockies.remove('jwt_token')
    history.replace('/login')
  }
  return <button onClick={onClickToDeleteToken}>Logout</button>
}
export default withRouter(LogoutButton)
