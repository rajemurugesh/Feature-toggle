// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import FeatureFlagsContext from './FeatureFlagsContext'
import App from './App'

const featureFlags = {
  showLoginOption: true, // Set to true to show the login option
}

ReactDOM.render(
  <FeatureFlagsContext.Provider value={featureFlags}>
    <App />
  </FeatureFlagsContext.Provider>,
  document.getElementById('root'),
)
