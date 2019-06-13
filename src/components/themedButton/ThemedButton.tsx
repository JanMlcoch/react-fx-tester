import React from 'react';
import {ThemeContext} from "../../utils/ThemedProvider";

interface ThemedButtonProps {
  onClick: () => void
}

export class ThemedButton extends React.Component<ThemedButtonProps> {
  render () {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button onClick={this.props.onClick} style={{backgroundColor: theme.background}}>Change theme</button>
        )}
      </ThemeContext.Consumer>
    )
  }
}
