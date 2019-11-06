import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import DarkIco from '../../static/dark.svg'
import LightIco from '../../static/light.svg'

class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              style={{
                visibility: 'hidden',
              }}
            />{' '}
            <img style={{ width: 50 }} src={ (theme === 'dark') ? DarkIco : LightIco } alt={{theme}} /> 
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggler
