import {connect} from 'react-redux'
import {Profit} from '../components/profit/Profit';
import {ITrade, TradeType} from '../components/trader/Trader';

const getProfit = (trades: ITrade[]) => {
  const profit: any = trades.reduce((curVal: number, trade: ITrade) => {
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
};

const mapStateToProps = (state: any) => ({
  profit: getProfit(state.trades)
});

export const ProfitCont = connect(
  mapStateToProps
)(Profit);
