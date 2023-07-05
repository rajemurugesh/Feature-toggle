import React, {useContext, useState} from 'react'
import FeatureFlagsContext from './FeatureFlagsContext'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const featureFlags = useContext(FeatureFlagsContext)
  const showLoginOption = featureFlags.showLoginOption

  if (!showLoginOption) {
    return null // Return null if the login option is disabled
  }

  const handleLogin = () => {

    // Simulating a successful login after 2 seconds
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 2000)
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>Login successful!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}

export default Login
