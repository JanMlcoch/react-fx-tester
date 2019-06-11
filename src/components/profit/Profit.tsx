import React from 'react';

interface ProfitProps {
  profit: number
}

export class Profit extends React.Component<ProfitProps> {
  render() {
    return (
      <div className="row result">
        Zisk/ztráta: {this.props.profit.toFixed(3)} €
      </div>
    )
  }
}
