import React, {ReactElement} from 'react'
import {Chart} from '../chart/Chart'
import {Trade} from '../trade/Trade'

enum TradeType {
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
  trades: any;
  addTrade: any;
  closeTrade: any;
}

interface TraderState {
  actualPrice?: number;
}

export class Trader extends React.Component<TraderProps, TraderState> {
  static _tradeIdIterator = 0;
  intervalId: any;

  state: TraderState = {
    actualPrice: undefined,
  };

  get profit(): number {
    const profit: any = this.props.trades.reduce((curVal: any, trade: ITrade) => {
      if (!trade.closePrice || !trade.openPrice) {
        return curVal
      }
      if (trade.type === TradeType.BUY) {
        return curVal + trade.closePrice - trade.openPrice
      } else {
        return curVal + trade.openPrice - trade.closePrice
      }
    }, 0);
    return profit * 1000
  }

  componentDidMount(): void {
    this.updateActualPrice();
    this.intervalId = setInterval(() => {
      this.updateActualPrice()
    }, 5000)
  }

  updateActualPrice = async (): Promise<void> => {
    const actualPrice = await this.getActualRate();
    this.setState({
      actualPrice: actualPrice
    })
  };

  addBuyTrade = (): void => {
    const newTrade: ITrade = {
      id: Trader._tradeIdIterator++,
      openPrice: this.state.actualPrice,
      closePrice: undefined,
      type: TradeType.BUY,
      time: new Date()
    };
    this.props.addTrade(newTrade);
  };

  addSellTrade = (): void => {
    const newTrade = {
      id: Trader._tradeIdIterator++,
      openPrice: this.state.actualPrice,
      closePrice: undefined,
      type: TradeType.SELL,
      time: new Date()
    };
    this.props.addTrade(newTrade);
  };

  getActualRate = async (): Promise<number | undefined> => {
    return new Promise(resolve => {
      // fetch('https://cors.io/?https://www.freeforexapi.com/api/live?pairs=EURUSD')
      fetch('https://api.exchangeratesapi.io/latest?symbols=USD')
        .then(function (response) {
          return response.json()
        })
        .then((res) => {
          console.log(res);
          // const rate = res.rates.EURUSD.rate;
          const rate = res.rates.USD;
          // const makeItFunny = 0
          const makeItFunny = (Math.random() - 0.5) / 100;
          resolve(rate + makeItFunny)
        })
        .catch(() => {
          resolve(undefined)
        })
    })
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
                Aktuální cena: {this.state.actualPrice && this.state.actualPrice.toFixed(4)}
              </div>
              <div className="row">
                <button onClick={this.addBuyTrade} className="controls__button">Buy</button>
                <button onClick={this.addSellTrade} className="controls__button">Sell</button>
              </div>
              <div className="row">
                <h2>Obchody</h2>
              </div>
              {this.props.trades.map((trade: any) => {
                return <Trade trade={trade} key={trade.id} onClose={this.props.closeTrade}/>
              })}
              <div className="row result">
                Zisk/ztráta: {this.profit.toFixed(3)} €
              </div>
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

  componentWillUnmount(): void {
    clearInterval(this.intervalId)
  }
}
