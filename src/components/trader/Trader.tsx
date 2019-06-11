import React, {ReactElement} from 'react'
import {Chart} from '../chart/Chart'
import {Trade} from '../trade/Trade'
import {ProfitCont} from '../../containers/profitCont';

export enum TradeType {
  BUY = 'BUY',
  SELL = 'SELL'
}

export type ITrade = {
  id: number;
  openPrice?: number;
  closePrice?: number;
  type: TradeType,
  time: Date;
}

interface TraderProps {
  trades: ITrade[];
  addTrade: ({openPrice, type}: {openPrice: number, type: TradeType}) => void;
  closeTrade: (tradeId: number, closePrice: number) => void;
  actualRate: number;
}

export class Trader extends React.Component<TraderProps> {

  addBuyTrade = (): void => {
    this.props.addTrade({
      openPrice: this.props.actualRate,
      type: TradeType.BUY
    });
  };

  addSellTrade = (): void => {
    this.props.addTrade({
      openPrice: this.props.actualRate,
      type: TradeType.SELL
    });
  };

  render(): ReactElement {
    return (
      <div className="app container">
        <div className="row">
          <h1>Fx tester</h1>
        </div>
        <div className="row">
          <div className="col-8 chart__cont">
            <Chart/>
          </div>
          <div className="col-4">
            <div className="container">
              <div className="row">
                Aktuální cena: {this.props.actualRate && this.props.actualRate.toFixed(4)}
              </div>
              <div className="row">
                <button onClick={this.addBuyTrade} className="controls__button">Buy</button>
                <button onClick={this.addSellTrade} className="controls__button">Sell</button>
              </div>
              <div className="row">
                <h2>Obchody</h2>
              </div>
              {this.props.trades.map((trade: ITrade) => {
                return <Trade trade={trade} key={trade.id} onClose={this.props.closeTrade} actualRate={this.props.actualRate}/>
              })}
              <ProfitCont/>
            </div>
          </div>
          <a href="https://www.freeforexapi.com">
            <img
              alt="Free Forex API"
              src="https://www.freeforexapi.com/Images/link.png"
              height="20"
            />
          </a>
        </div>
      </div>
    )
  }
}
