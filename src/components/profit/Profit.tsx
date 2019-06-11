import React from 'react';

interface ProfitProps {
  profit: any
}

export class Profit extends React.Component<ProfitProps> {
  render() {
    console.log(this.props);
    return (
      <div>
        User profit
      </div>
    )
  }
}
